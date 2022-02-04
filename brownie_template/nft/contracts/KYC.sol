// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract kyc {
    address owner;

    constructor(address _owner) {
        owner = _owner;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    struct DocumentID {

        address seller_address;
        string documentURI;
        address[] verifier_address;
        bool is_verified;
        bool is_rent;
        bool is_minted;
        uint256 price;
        string lat_long;
        
    }
    // DocumentID[] public document_ids;
    mapping(address => DocumentID) public document_ids;

    function createDoc(string memory docURI, bool is_rent, uint256 price, string memory latLong) public {
        
        require(price > 0, "Price must be greater than 0");
        address[] memory verify_address = new address[](3);

        document_ids[msg.sender] = DocumentID({
            seller_address: msg.sender,
            documentURI: docURI,
            verifier_address: verify_address,
            is_verified: false,
            is_rent: is_rent,
            is_minted: false,
            price: price,
            lat_long: latLong
        });
        
    }

    function verify(address seller_address) onlyOwner public {
        require(seller_address != address(0), "Seller address cannot be 0");
        document_ids[seller_address].verifier_address.push(msg.sender);
        
    }
}