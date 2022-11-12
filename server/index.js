const crypto = require('crypto-js');
const express = require('express');
const cors = require('cors');
const contract = require('./contractFunctions.js');

const app = express();

const masterKey = 'getSturdyEyEyEy';

const ciphertext = crypto.AES.encrypt('my message', masterKey).toString();

const citizenExample = {
        id: "10154859744",
        name: "Kadircan",
        surname: "Bozkurt",
        dateOfBirth: "23.12.2000",
        gender: "Erkek",
        nationality: "TR",
        bloodGroup: "Brh+",
        allergies:{
            drug: "Aspirin",
            food: "Peanut",
            other: "None"
        }
        
    };
const doctorExample = 
{
    id: "10154859744",
    name: "Kadircan",
    surname: "Bozkurt",
    speciality: "Cardiologist",
    hospital: "Istanbul University"
}
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
    }
]

app.use(express.json());
app.use(cors({origin: '*'}));

app.get('/api', (req, res) => {
    res.send(ciphertext);
});

app.post('/api/citizen/getBasicInfo', (req, res) => {
    if (req.body == null) {
        res.status(400).send("Bad Request");
        return;
    }
    const input = JSON.parse(JSON.stringify(req.body));
    if(input.qr != null)
    {
        const decrypted = crypto.AES.decrypt(input.qr, masterKey).toString(crypto.enc.Utf8);
        // CODE : get citizen information
        res.send(citizenExample);
        return;
    }
    else if(input.tc != null)
    {
        console.log(input.tc);
        const citizen = authInfo.find(c => c.id === input.tc);
        if(!citizen)
        {
            res.status(400).send("No citizen found");
            return;
        }
        if(citizen.password === input.password)
            // CODE: get citizen info from blockchain
            res.send(citizenExample);
        else
            res.status(400).send("Wrong password");
        return;
    }
});

app.post('/api/citizen/getFullInfo', (req, res) => {
    if (req.body == null) {
        res.status(400).send("Bad Request");
        return;
    }
    const input = JSON.parse(JSON.stringify(req.body));

    const decrypted = crypto.AES.decrypt(input.qr, masterKey).toString(crypto.enc.Utf8);

    const citizenTC = "x"; // CODE: get citizen TC from blockchain and get tc
    const citizen = authInfo.find(c => c.id === citizenTC);
    
    if(citizen.password === input.password)
        // CODE: get citizen full information 
        res.send(citizenExample);
    else
        res.status(400).send("Wrong password");
    return;
    
});

app.post('/api/doctorLogin', (req, res) => {
    if (req.body == null) {
        res.status(400).send("Bad Request");
        return;
    }
    const input = JSON.parse(JSON.stringify(req.body));

    const decrypted = crypto.AES.decrypt(input.qr, masterKey).toString(crypto.enc.Utf8);

    const citizenTC = "x"; // CODE: get citizen TC from blockchain and get tc
    const citizen = authInfo.find(c => c.id === citizenTC);
    
    if(citizen.password === input.password)
    {
        const isDoctor = true;// CODE : get if doctor
        if(isDoctor)
        {
            //CODE: get doctor info
            res.send(doctorExample)
            return;
        }
        else
        {
            res.status(400).send("Not a doctor");
            return;
        }
    }
        
    else
        res.status(400).send("Wrong password");
    return;
    
});

const PORT = 5000;
app.listen(PORT, () => console.log('Listening port %d...', PORT));