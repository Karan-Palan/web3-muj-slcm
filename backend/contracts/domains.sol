// TODO: Domains Contract Implementation
// 1. Set up the contract and import necessary libraries:
//    - Hardhat console , OpenZeppelin's ERC721URIStorage, Counters, and custom libraries (Base64, StringUtils).
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
