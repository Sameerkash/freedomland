// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;

    constructor(address marketplaceAddress) ERC721("Eat The Blocks NFTs", "ETBNFT") {
        contractAddress = marketplaceAddress;
    }

    function createToken(string memory documentURI, uint256 verifiers) public returns (uint) {
        require(verifiers == 3, "DocumentID has not been verified, waiting to be verified");
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, documentURI);
        setApprovalForAll(contractAddress, true);
        return newItemId;
    }
}
