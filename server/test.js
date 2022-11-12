const contractFunc = require("./contractFunctions.js");
const crypto = require("./cryption.js");
const { ethers } = require("ethers");

const args = { gaslimit: 21000 };
httpProvider_Avax = "https://api.avax-test.network/ext/bc/C/rpc";
contractAddress = "0x1511b10671f97CEd2D52324Ca3c7229e6bC4a46A";
adminPriv = "260210835d9bad02621e07ecdda7335f4b93cc8302cd7c77a876b18b56ed6913";
doctorPriv = "f7bc15ca9d4503fa61f7ef3ac094d4e6a3f1ad83855a3f1b481adb9649c5b88c";
patientPriv =
    "2c5a52e5fc79e49c9784d7b7952ae79302ba0e9d93b97cbfbc6725f56b12647b";
async function test() {
    const abi = contractFunc.abi;
    const provider = new ethers.providers.JsonRpcProvider(httpProvider_Avax);
    const adminWallet = new ethers.Wallet(adminPriv, provider);
    const doctorWallet = new ethers.Wallet(doctorPriv, provider);
    const patientWallet = new ethers.Wallet(patientPriv, provider);

    const contract_admin = new ethers.Contract(
        contractAddress,
        abi,
        adminWallet
    );
    const contract_doctor = new ethers.Contract(
        contractAddress,
        abi,
        doctorWallet
    );
    const contract_patient = new ethers.Contract(
        contractAddress,
        abi,
        patientWallet
    );

    const diagnose1 = {
        diagnose: "Kadircan has a cold",
        drug: "Paracetamol",
        date: "23.12.2020",
        doctor: "Dr. Kadircan Bozkurt",
    };
    const diagnose2 = {
        diagnose: "Enes has a cold",
        drug: "Paracetamol",
        date: "23.12.2020",
        doctor: "Dr. Enes Bozkurt",
    };
    const patientPublicKey = crypto.getPublicKey(patientPriv);
    const encryptedDiagnose1 = crypto.encryptDiagnose(
        diagnose2,
        patientPublicKey
    );
    let response = await contractFunc.addDiagnose(
        contract_doctor,
        patientWallet.address,
        encryptedDiagnose1
    );

    let diagnoses = await contractFunc.getFullDiagnosesDoctor(
        contract_doctor,
        patientWallet.address
    );

    for (let i = 0; i < diagnoses.length; i++) {
        let patientJSON = await crypto.getpatientJSON(
            diagnoses[i],
            patientPriv
        );
        console.log(JSON.parse(patientJSON));
    }

    console.log(diagnoses);
}

test();
