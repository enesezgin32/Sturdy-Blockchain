const { ethers } = require("ethers");

const abi = [
    {
        inputs: [],
        name: "AccessDenied",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "patient",
                type: "address",
            },
        ],
        name: "newDiagnosis",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "patientAddress",
                type: "address",
            },
            {
                internalType: "string",
                name: "diagnose",
                type: "string",
            },
        ],
        name: "addDiagnose",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "personAddress",
                type: "address",
            },
        ],
        name: "assignAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "personAddress",
                type: "address",
            },
        ],
        name: "assignDoctor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "personAddress",
                type: "address",
            },
        ],
        name: "dismissAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "personAddress",
                type: "address",
            },
        ],
        name: "dismissDoctor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        stateMutability: "payable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "citizienCount",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "patientAddress",
                type: "address",
            },
        ],
        name: "getBasicInfo",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "patientAddress",
                type: "address",
            },
        ],
        name: "getPatientDiagnoses",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getSelfDiagnoses",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "isAdmin",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "isDoctor",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

const contractAddress = "0xFd701C74999aAC75f2E816F1E84c7Fe19ab38816";

//system

function isAdmin(adminWallet) {}

function isDoctor(doctorWallet) {}

// admin
function assignAdmin(adminWallet, newAdminAddress) {}

function dismissAdmin(adminWallet, adminAddress) {}

function assignDoctor(adminWallet, newDoctorAddress) {}

function dismissDoctor(adminWallet, doctorAddress) {}

// doctor

function addDiagnose(doctorWallet, patientAddress, diagnose) {}

function getFullDiagnoses(patientWallet) {}

function getBasicInfo(patientAddress) {}
