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
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_isHided",
                type: "bool",
            },
        ],
        name: "hideOrShowDiagnose",
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
        name: "getPermission",
        outputs: [
            {
                internalType: "bool[]",
                name: "",
                type: "bool[]",
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

const httpProvider_Avax = "https://api.avax-test.network/ext/bc/C/rpc";

const contractAddress = "0x1511b10671f97CEd2D52324Ca3c7229e6bC4a46A";

//system

async function isAdmin(Contract, adminAddress) {
    const res = await Contract["isAdmin"](adminAddress);
    return res;
}

async function isDoctor(Contract, doctorAddress) {
    const res = await Contract["isDoctor"](doctorAddress);
    return res;
}

// admin
async function assignAdmin(Contract, newAdminAddress) {
    let response = await Contract["assignAdmin"](newAdminAddress);

    const transactionReceipt = await response.wait(1);
}

async function dismissAdmin(Contract, adminAddress) {
    let response = await Contract["dismissAdmin"](adminAddress);

    const transactionReceipt = await response.wait(1);
}

async function assignDoctor(Contract, newDoctorAddress) {
    let response = await Contract["assignDoctor"](newDoctorAddress);

    const transactionReceipt = await response.wait(1);
}

async function dismissDoctor(Contract, doctorAddress) {
    let response = await Contract["dismissDoctor"](doctorAddress);

    const transactionReceipt = await response.wait(1);
}

// doctor

async function addDiagnose(Contract, patientAddress, diagnose) {
    let response = await Contract["addDiagnose"](patientAddress, diagnose);

    const transactionReceipt = await response.wait(1);
}

async function getFullDiagnosesDoctor(Contract, patientAddress) {
    let response = await Contract["getPatientDiagnoses"](patientAddress);
    return response;
}

async function getFullDiagnosesSelf(Contract) {
    let response = await Contract["getSelfDiagnoses"]();
    return response;
}

async function changePermission(Contract, permission) {
    let response = await Contract["hideOrShowDiagnose"](permission);

    const transactionReceipt = await response.wait(1);
}
async function getPermission(Contract) {
    let response = await Contract["getPermission"]();
    return response;
}

module.exports = {
    isAdmin,
    isDoctor,
    assignAdmin,
    assignDoctor,
    dismissAdmin,
    dismissDoctor,
    addDiagnose,
    getFullDiagnosesDoctor,
    getFullDiagnosesSelf,
    abi,
    changePermission,
    contractAddress,
    getPermission,
};
