// TODO: Domains Contract Implementation
pragma solidity ^0.8.10;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {Base64} from "./libraries/Base64.sol";
import {StringUtils} from "./libraries/StringUtils.sol";

contract Domains is ERC721URIStorage {
using Counters for Counters.Counter;
Counters.Counter private _tokenIds;

address payable public owner;

constructor(string memory _tld)
    payable
    ERC721("MUJ Student Web3 Domain", "MSWD")
{
    owner = payable(msg.sender);
    console.log("%s name service deployed", _tld);
}

}
mapping(uint256 => string) public names;
mapping(string => string) public records;
mapping(string => address) public domains;

string public tld;
string constant SVG_PART_ONE = '<svg xmlns="http://www.w3.org/2000/svg" ...>';
string constant SVG_PART_TWO = '</text></svg>';

modifier onlyOwner() {
    require(isOwner());
    _;
}

function isOwner() public view returns (bool) {
    return msg.sender == owner;
}

function price(string calldata name) public pure returns (uint256) {
    uint256 len = StringUtils.strlen(name);
    require(len > 0);
    if (len == 3) {
        return 5 * 10**14; // 0.0005 MATIC
    } else if (len == 4) {
        return 3 * 10**14; // 0.0003 MATIC
    } else {
        return 1 * 10**14; // 0.0001 MATIC
    }
}

function register(string calldata name) public payable {
    if (domains[name] != address(0)) revert AlreadyRegistered();
    if (!valid(name)) revert InvalidName(name);
    require(msg.value >= price(name), "Not enough Matic paid");

    string memory _name = string(abi.encodePacked(name, ".", tld));
    string memory finalSvg = string(abi.encodePacked(SVG_PART_ONE, _name, SVG_PART_TWO));

    uint256 newRecordId = _tokenIds.current();
    string memory json = Base64.encode(
        abi.encodePacked(
            '{"name": "', _name, '", "description": "A Web3 domain for students of LPU", ',
            '"image": "data:image/svg+xml;base64,', Base64.encode(bytes(finalSvg)), '"}'
        )
    );

    string memory finalTokenUri = string(abi.encodePacked("data:application/json;base64,", json));

    _safeMint(msg.sender, newRecordId);
    _setTokenURI(newRecordId, finalTokenUri);

    domains[name] = msg.sender;
    names[newRecordId] = name;
    _tokenIds.increment();
}

// 3. Implement core functions:
//    - `price`: Calculate registration cost based on name length.
//    - `register`: Mint a domain as an NFT with metadata and store ownership details.
// 4. Add utility functions:
//    - `getAllNames`: Return a list of all registered domains.
//    - `valid`: Validate domain name length.
//    - `getAddress`: Get the owner's address for a domain.
// 5. Implement records management:
//    - `setRecord`: Allow owners to set records for their domains.
//    - `getRecord`: Retrieve domain-specific records.
// 6. Add an owner-only function to withdraw contract funds.
