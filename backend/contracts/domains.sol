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
// 2. Define state variables:
//    - Mappings for domain data (names, records, ownership).
//    - SVG template parts for domain visualization.
//    - Contract owner and TLD.
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
