const crypto = require("crypto-js");
const express = require("express");
const cors = require("cors");
const contractFunc = require("./contractFunctions.js");
const selfMadeCrypto = require("./cryption.js");
const { ethers } = require("ethers");

const app = express();

const masterKey = "getSturdyEyEyEy";
const httpProvider_Avax = "https://api.avax-test.network/ext/bc/C/rpc";
const provider = new ethers.providers.JsonRpcProvider(httpProvider_Avax);
const abi = contractFunc.abi;

const citizenExample = {
    id: "10154859744",
    name: "Kadircan",
    surname: "Bozkurt",
    dateOfBirth: "23.12.2000",
    gender: "Erkek",
    nationality: "TR",
    bloodGroup: "Brh+",
    allergies: {
        drug: "Aspirin",
        food: "Peanut",
        other: "None",
    },
};
const diagnoseExample = {
    diagnose: "Kadircan has a cold",
    drug: "Paracetamol",
    date: "23.12.2020",
    doctor: "Dr. Kadircan Bozkurt",
};
const doctorExample = {
    id: "10154859744",
    name: "Kadircan",
    surname: "Bozkurt",
    speciality: "Cardiologist",
    hospital: "Istanbul University",
};
const authInfo = [
    {
        id: "10154859744",
        password: "123456",
        publicKey: "0x1234567890",
    },
    {
        id: "10154859744",
        password: "123456",
        publicKey: "0x1234567890",
    },
    {
        id: "x",
        password: "y",
        publicKey: "0x1234567890",
    },
];
const ciphertext = crypto.AES.encrypt(
    JSON.stringify(diagnoseExample),
    masterKey
).toString();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/api", (req, res) => {
    res.send(ciphertext);
});

app.post("/api/citizen/getBasicInfo", (req, res) => {
    if (req.body == null) {
        res.status(400).send("Bad Request");
        return;
    }
    const input = JSON.parse(JSON.stringify(req.body));
    if (input.qr != null) {
        const decrypted = crypto.AES.decrypt(input.qr, masterKey).toString(
            crypto.enc.Utf8
        );
        // CODE : get citizen information
        res.send(citizenExample);
        return;
    } else if (input.tc != null) {
        console.log(input.tc);
        const citizen = authInfo.find((c) => c.id === input.tc);
        if (!citizen) {
            res.status(400).send("No citizen found");
            return;
        }
        if (citizen.password === input.password)
            // CODE: get citizen info from blockchain
            res.send(citizenExample);
        else res.status(400).send("Wrong password");
        return;
    }
});

app.post("/api/citizen/getFullInfo", async (req, res) => {
    if (req.body == null) {
        res.status(400).send("Bad Request");
        return;
    }
    const input = JSON.parse(JSON.stringify(req.body));

    const patientPriv = crypto.AES.decrypt(input.qr, masterKey).toString(
        crypto.enc.Utf8
    );

    const citizenTC = "x"; // CODE: get citizen from blockchain and get tc
    const citizen = authInfo.find((c) => c.id === citizenTC);

    if (citizen.password === input.password) {
        // CODE: get citizen full information
        const patientWallet = new ethers.Wallet(patientPriv, provider);
        const contract_patient = new ethers.Contract(
            contractAddress,
            abi,
            patientWallet
        );
        let diagnoses = await contractFunc.getFullDiagnosesSelf(
            contract_patient
        );
        let diagnosesJSON = [];
        for (let i = 0; i < diagnoses.length; i++) {
            let patientJSON = await selfMadeCrypto.getpatientJSON(
                diagnoses[i],
                patientPriv
            );
            diagnosesJSON.push(patientJSON);
        }
        // SELF: decrypt diagnose
        res.send(diagnosesJSON);
    } else res.status(400).send("Wrong password");
    return;
});

app.post("/api/citizen/changePermission", (req, res) => {
    if (req.body == null) {
        res.status(400).send("Bad Request");
        return;
    }
    const input = JSON.parse(JSON.stringify(req.body));

    const decrypted = crypto.AES.decrypt(input.qr, masterKey).toString(
        crypto.enc.Utf8
    );

    const citizenTC = "x"; // CODE: get citizen from blockchain and get tc
    const citizen = authInfo.find((c) => c.id === citizenTC);

    if (citizen.password === input.password)
        // CODE: get citizen full information
        // SELF: decrypt diagnose
        res.send(diagnoseExample);
    else res.status(400).send("Wrong password");
    return;
});

app.post("/api/doctor/login", (req, res) => {
    if (req.body == null) {
        res.status(400).send("Bad Request");
        return;
    }
    const input = JSON.parse(JSON.stringify(req.body));

    const decrypted = crypto.AES.decrypt(input.qr, masterKey).toString(
        crypto.enc.Utf8
    );

    const citizenTC = "x"; // CODE: get citizen TC from blockchain and get tc
    const citizen = authInfo.find((c) => c.id === citizenTC);

    if (citizen.password === input.password) {
        const isDoctor = true; // CODE : get if doctor
        if (isDoctor) {
            //CODE: get doctor info
            res.send(doctorExample);
            return;
        } else {
            res.status(400).send("Not a doctor");
            return;
        }
    } else res.status(400).send("Wrong password");
    return;
});

app.post("/api/doctor/getFullInfo", (req, res) => {
    if (req.body == null) {
        res.status(400).send("Bad Request");
        return;
    }
    const input = JSON.parse(JSON.stringify(req.body));

    if (input.tc != null) {
        // CODE: get basic and full information
        // CODE: check permissions
        // SELF: decrypt diagnose
        res.send(diagnoseExample);
    } else if (input.qr != null) {
        const decrypted = crypto.AES.decrypt(input.qr, masterKey).toString(
            crypto.enc.Utf8
        );
        const citizenTC = "x"; // CODE: get citizen TC from blockchain and get tc
        const citizen = authInfo.find((c) => c.id === citizenTC);
        // CODE: get basic and full information
        // CODE: check permissions
        // SELF: decrypt diagnose
        res.send(diagnoseExample);
    }
    return;
});

const PORT = 5000;
app.listen(PORT, () => console.log("Listening port %d...", PORT));
