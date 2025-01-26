// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import {Base64} from "./libraries/Base64.sol";
import {StringUtils} from "./libraries/StringUtils.sol";

contract Domains is ERC721URIStorage {
    address payable public owner;
    uint256 private _tokenIdCounter; // Custom counter for token IDs

    // Mappings for domain ownership, records, and token ID to name
    mapping(uint256 => string) public names;
    mapping(string => string) public records;
    mapping(string => address) public domains;

    // Errors
    error Unauthorized();
    error AlreadyRegistered();
    error InvalidName(string name);

    // Public variables
    string public tld;

    // Modifier to restrict certain functions to the contract owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor(
        string memory _tld
    ) payable ERC721("Decentralized Domains", "DOM") {
        owner = payable(msg.sender);
        tld = _tld;
        console.log("%s domain service deployed", _tld);
    }

    /// Register a domain
    function register(string calldata name) public payable {
        require(domains[name] == address(0), "Domain is already registered");
        require(valid(name), "Invalid domain name");

        uint256 priceAmount = price(name);
        require(msg.value >= priceAmount, "Not enough MATIC sent");

        string memory fullName = string(abi.encodePacked(name, ".", tld));
        uint256 newTokenId = _tokenIdCounter;
        _tokenIdCounter += 1; // Increment counter manually

        // Mint the NFT to the caller
        _safeMint(msg.sender, newTokenId);

        // Generate metadata for the NFT
        string memory metadata = Base64.encode(
            abi.encodePacked(
                '{"name": "',
                fullName,
                '", "description": "A decentralized domain", "image": ""}' // Add SVG image here if needed
            )
        );

        string memory tokenURI = string(
            abi.encodePacked("data:application/json;base64,", metadata)
        );
        _setTokenURI(newTokenId, tokenURI);

        domains[name] = msg.sender; // Assign domain ownership
        names[newTokenId] = name; // Save token ID to domain mapping

        console.log(
            "Domain %s.%s has been registered by %s",
            name,
            tld,
            msg.sender
        );
    }

    /// Validate domain name
    function valid(string calldata name) public pure returns (bool) {
        uint256 length = StringUtils.strlen(name);
        return length >= 3 && length <= 10;
    }

    /// Calculate price based on domain name length
    function price(string calldata name) public pure returns (uint256) {
        uint256 length = StringUtils.strlen(name);
        if (length == 3) {
            return 5 * 10 ** 14; // 0.0005 MATIC
        } else if (length == 4) {
            return 3 * 10 ** 14; // 0.0003 MATIC
        } else {
            return 1 * 10 ** 14; // 0.0001 MATIC
        }
    }

    /// Set a record for a domain
    function setRecord(string calldata name, string calldata record) public {
        if (msg.sender != domains[name]) revert Unauthorized();
        records[name] = record;
    }

    /// Get a record for a domain
    function getRecord(
        string calldata name
    ) public view returns (string memory) {
        return records[name];
    }

    /// Get the owner of a domain
    function getAddress(string calldata name) public view returns (address) {
        return domains[name];
    }

    /// Get all registered domain names
    function getAllNames() public view returns (string[] memory) {
        uint256 total = _tokenIdCounter;
        string[] memory allNames = new string[](total);
        for (uint256 i = 0; i < total; i++) {
            allNames[i] = names[i];
        }
        return allNames;
    }

    /// Withdraw all funds from the contract
    function withdraw() public onlyOwner {
        uint256 amount = address(this).balance;
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Withdrawal failed");
    }
}
