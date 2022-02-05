// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Verifier {
    // address owner;
    address[] public verifiers;

    // constructor() {
    //     owner = _owner;
    // }

    // modifier onlyOwner {
    //     require(msg.sender == owner);
    //     _;
    // }

    function becomeVerifier(uint256 noOfStakedTokens) public {

        require(noOfStakedTokens >= 10);
        verifiers.push(msg.sender);
    }

}