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

let currentQR = null;

const contractAddress = "0x1511b10671f97CEd2D52324Ca3c7229e6bC4a46A";
const citizens = [
    {
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
    },
    {
        id: "x",
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
    },
];
const doctors = [
    {
        id: "10154859744",
        name: "Kadircan",
        surname: "Bozkurt",
        speciality: "Cardiologist",
        hospital: "Istanbul University",
    },
    {
        id: "x",
        name: "Kadircan",
        surname: "Bozkurt",
        speciality: "Cardiologist",
        hospital: "Istanbul University",
    },
];
const diagnoseExample = {
    diagnose: "Kadircan has a cold",
    drug: "Paracetamol",
    date: "23.12.2020",
    doctor: "Dr. Kadircan Bozkurt",
    hospital : "Istanbul University"
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
        address: "0x1234567890",
    },
    {
        id: "10154859744",
        password: "123456",
        address: "0x1234567890",
    },
    {
        id: "x",
        password: "y",
        address: "0x4fBB8d4fCFb0C9785eBBf83536ddd32f36AB6083",
    },
    {
        id: "x",
        password: "y",
        address: "0x240e969cdf99fdf65a500Ebf2901Ea0DbbFb10fe",
    },
];
const ciphertext = crypto.AES.encrypt(
    "2c5a52e5fc79e49c9784d7b7952ae79302ba0e9d93b97cbfbc6725f56b12647b",
    masterKey
).toString();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/api", (req, res) => {
    res.send(ciphertext);
});
app.post("/api/applyQR", (req, res) => {
    console.log(req.body);
    const input = JSON.parse(JSON.stringify(req.body));
    currentQR = input.qr;
    res.send("OK");
});
app.get("/api/checkQR", (req, res) => {
    const temp = currentQR;
    currentQR = null;
    res.send(temp);
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
        const patientWallet = new ethers.Wallet(decrypted, provider);
        const patientAddress = patientWallet.address;
        const citizen = authInfo.find((c) => c.address === patientAddress);
        const citizenInfo = citizens.find((c) => c.id === citizen.id);
        res.send(citizenInfo);
        return;
    } 
    else if (input.tc != null) {
        const citizen = authInfo.find((c) => c.id === input.tc);
        if (!citizen) {
            res.status(400).send("No citizen found");
            return;
        }
        if (citizen.password === input.password) {
            const citizenInfo = citizens.find((c) => c.id === citizen.id);
            res.send(citizenInfo);
            return;
        } else res.status(400).send("Wrong password");
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
    const patientWallet = new ethers.Wallet(patientPriv, provider);
    const patientAddress = patientWallet.address;
    const citizen = authInfo.find((c) => c.address === patientAddress);
    if (!citizen) {
        res.status(400).send("No citizen found");
        return;
    }
    if (citizen.password === input.password) {
        const contract_patient = new ethers.Contract(
            contractAddress,
            abi,
            patientWallet
        );
        let diagnoses = await contractFunc.getFullDiagnosesSelf(
            contract_patient
        );
        //let permission = await contract_patient["hideOrShowDiagnose"]();
        let diagnosesJSON = [];
        for (let i = 0; i < diagnoses.length; i++) {
            let patientJSON = await selfMadeCrypto.getpatientJSON(
                diagnoses[i],
                patientPriv
            );

            diagnosesJSON.push(JSON.parse(patientJSON));
        }
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

    const patientPriv = crypto.AES.decrypt(input.qr, masterKey).toString(
        crypto.enc.Utf8
    );
    const patientWallet = new ethers.Wallet(patientPriv, provider);
    const contract_patient = new ethers.Contract(
        contractAddress,
        abi,
        patientWallet
    );
    res.send("Permission changed");
    return;
    contractFunc.changePermission(
        contract_patient,
        input.index,
        input.permission
    );

});

app.post("/api/doctor/login", async (req, res) => {
    if (req.body == null) {
        res.status(400).send("Bad Request");
        return;
    }
    const input = JSON.parse(JSON.stringify(req.body));

    const doctorPriv = crypto.AES.decrypt(input.qr, masterKey).toString(
        crypto.enc.Utf8
    );
    const doctorWallet = new ethers.Wallet(doctorPriv, provider);
    const doctorAddress = doctorWallet.address;
    
    const doctorAuth = authInfo.find((c) => c.address === doctorAddress);
    if (!doctorAuth) {
        res.status(400).send("No doctor found");
        return;
    }
    if (doctorAuth.password === input.password) {
        const contract_doctor = new ethers.Contract(
            contractAddress,
            abi,
            doctorWallet
        );
        const isDoctor = await contractFunc.isDoctor(
            contract_doctor,
            doctorAddress
        );
        if (isDoctor) {
            const doctorInfo = doctors.find((c) => c.id === doctorAuth.id);
            res.send(doctorInfo);
            return;
        } else {
            res.status(400).send("Not a doctor");
            return;
        }
    } 
    else 
        res.status(400).send("Wrong password");
    return;
});

app.post("/api/doctor/getFullInfo", async (req, res) => {
    if (req.body == null) {
        res.status(400).send("Bad Request");
        return;
    }
    const input = JSON.parse(JSON.stringify(req.body));

    if (input.tc != null) {
        const citizenAuth = authInfo.find((c) => c.id === input.tc);
        if (!citizenAuth) {
            res.status(400).send("No citizen found");
            return;
        }
        const citizenInfo = citizens.find((c) => c.id === citizenAuth.id);
        res.send(citizenInfo);
    } 
    else if(input.citizenqr != null && input.doctorqr != null) {
        const patientPriv = crypto.AES.decrypt(input.citizenqr, masterKey).toString(
            crypto.enc.Utf8
        );
        const doctorPriv = crypto.AES.decrypt(input.doctorqr, masterKey).toString(
            crypto.enc.Utf8
        );
        const doctorWallet = new ethers.Wallet(doctorPriv, provider);
        const patientWallet = new ethers.Wallet(patientPriv, provider);

        const citizen = authInfo.find((c) => c.address === patientWallet.address);
        const citizenInfo = citizens.find((c) => c.id === citizen.id);

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
        let diagnoses = await contractFunc.getFullDiagnosesDoctor(
            contract_doctor,
            patientWallet.address
        );
        let permissions = await contractFunc.getPermission(contract_patient);
        let diagnosesJSON = [citizenInfo];
        for (let i = 0; i < diagnoses.length; i++) {
            let patientJSON = await selfMadeCrypto.getpatientJSON(
                diagnoses[i],
                patientPriv
            );
            if (!permissions[i]) {
                diagnosesJSON.push(JSON.parse(patientJSON));
            }
        }
        res.send(diagnosesJSON);
    }
    return;
});

const PORT = 5000;
app.listen(PORT, () => console.log("Listening port %d...", PORT));
