// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

error AccessDenied();
error PersonNotExist();

contract sturdy {
    //citiziens
    uint64 citizienCount;
    mapping(address => string) citiziens;
    mapping(address => string[]) diagnoses;

    //admins
    mapping(address => bool) isAdmin;

    //doctor
    mapping(address => bool) isDoctor;

    constructor() payable {
        isAdmin[msg.sender] = true;
    }

    //events

    event newDiagnosis(address indexed patient);

    //modifiers
    modifier onlyAdmin() {
        checkAdmin();
        _;
    }

    modifier onlyDoctor() {
        checkDoctor();
        _;
    }

    //modifier functions
    function checkAdmin() internal view {
        if (!isAdmin[msg.sender]) {
            revert AccessDenied();
        }
    }

    function checkDoctor() internal view {
        if (!isDoctor[msg.sender]) {
            revert AccessDenied();
        }
    }

    //admin functions
    function assignAdmin(address personAddress) public onlyAdmin {
        isAdmin[personAddress] = true;
    }

    function dismissAdmin(address personAddress) public onlyAdmin {
        isAdmin[personAddress] = false;
    }

    function assignDoctor(address personAddress) public onlyAdmin {
        isDoctor[personAddress] = true;
    }

    function dismissDoctor(address personAddress) public onlyAdmin {
        isDoctor[personAddress] = false;
    }
}
