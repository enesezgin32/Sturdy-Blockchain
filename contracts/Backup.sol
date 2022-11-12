// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract backup {
    uint64 public citizienCount;
    mapping(uint256 => string) private citiziens;

    //admins
    mapping(address => bool) public isAdmin;

    //modifiers
    modifier onlyAdmin() {
        checkAdmin();
        _;
    }

    //modifier functions
    function checkAdmin() internal view {
        if (!isAdmin[msg.sender]) {
            revert AccessDenied();
        }
    }

    function addPerson(string memory) public onlyAdmin {}
}
