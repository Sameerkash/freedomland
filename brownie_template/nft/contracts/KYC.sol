// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";

contract KYC {
  address owner;
  using Counters for Counters.Counter;
  Counters.Counter private _docIds;

  constructor(address _owner) {
    owner = _owner;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  struct DocumentID {
    address seller_address;
    string documentURI;
    address[] verifier_address;
    bool is_rent;
    bool is_minted;
    uint256 price;
    string lat_long;
    uint256 docID;
  }

  // DocumentID[] public document_ids;
  mapping(address => DocumentID[]) public document_ids;

  function createDoc(
    string memory docURI,
    bool is_rent,
    uint256 price,
    string memory latLong
  ) public returns (DocumentID[] memory) {
    require(price > 0, "Price must be greater than 0");
    _docIds.increment();
    address[] memory verify_address = new address[](0);
    DocumentID memory doc_id = DocumentID(
      msg.sender,
      docURI,
      verify_address,
      is_rent,
      false,
      price,
      latLong,
      _docIds.current()
    );
    document_ids[msg.sender].push(doc_id);
    return document_ids[msg.sender];
  }

  function verify(address seller_address, uint256 docID) public returns (bool) {
    require(seller_address != address(0), "Seller address cannot be 0");

    for (uint256 i = 0; i < document_ids[seller_address].length; i++) {
      // require(document_ids[seller_address][i].verifier_address.length != 3, "Document is already verified");
      if (document_ids[seller_address][i].docID == docID) {
        document_ids[seller_address][i].verifier_address.push(msg.sender);
      }
    }
    return true;
  }

  function hasVerfiedLands(address seller_address) public view returns (bool) {
    require(seller_address != address(0), "Seller address cannot be 0");
    for (uint256 i = 0; i < document_ids[seller_address].length; i++) {
      if (document_ids[seller_address][i].verifier_address.length == 3) {
        return true;
      }
    }
    return false;
  }

  function getVerifiedLands(address seller_address)
    public
    view
    returns (DocumentID[] memory)
  {
    require(hasVerfiedLands(seller_address));
    DocumentID[] memory verified_lands = new DocumentID[](
      document_ids[seller_address].length
    );
    for (uint256 i = 0; i < document_ids[seller_address].length; i++) {
      if (document_ids[seller_address][i].verifier_address.length == 3) {
        DocumentID storage verified = document_ids[seller_address][i];
        verified_lands[i] = verified;
      }
    }
    return verified_lands;
  }

  function getVerifiers(address seller_address, uint256 docID)
    public
    view
    returns (address[] memory)
  {
    require(seller_address != address(0), "Seller address cannot be 0");
    uint256 index;
    for (uint256 i = 0; i < document_ids[seller_address].length; i++) {
      if (document_ids[seller_address][i].docID == docID) {
        index = i;
      }
    }
    return document_ids[seller_address][index].verifier_address;
  }

  function getuserDocuments() public view returns (DocumentID[] memory) {
    return document_ids[msg.sender];
  }
}