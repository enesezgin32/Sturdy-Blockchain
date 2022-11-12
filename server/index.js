const crypto = require('crypto-js');
const joi = require('joi');
const express = require('express');
//const contract = require('./contractFunctions.js');
const { application, json } = require('express');

const app = express();

const masterKey = 'getSturdyEyEyEy';

const ciphertext = crypto.AES.encrypt('my message', masterKey).toString();

const citizenExample = {
        id: "10154859744",
        name: "Kadircan",
        surname: "Bozkurt",
        dateOfBirth: "23.12.2000",
        gender: "Male",
        nationality: "TR",
        bloodGroup: "Brh+"
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
    }
]
app.use(express.json());
app.get('/api', (req, res) => {
    res.send(ciphertext);
});

app.post('/api/citizen/getBasicInfo', (req, res) => {
    /*const schema = {
        id: joi.string().min(11).max(11).required(),
        qr: joi.string().min(10).required(),
        tc: joi.string().min(11).max(11).required(),
        password: joi.string().min(6).required()
    };
    const result = joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }*/
    const input = JSON.parse(JSON.stringify(req.body));
    if(input.qr != null)
    {
        const decrypted = crypto.AES.decrypt(input.qr, masterKey).toString(crypto.enc.Utf8);

        res.send(citizenExample);
    }
    else if(input.tc != null)
    {
        console.log(input.tc);
        const citizen = authInfo.find(c => c.id === input.tc);
        if(citizen.password === input.password)
            res.send(citizenExample);
        else
            res.status(400).send("Wrong password");
    }
});

app.post('/api/citizen/', (req, res) => {
    console.log(req.body.name);
    const encrypted = crypto.AES.decrypt(req.body.name, masterKey).toString(crypto.enc.Utf8);
    //const json = contract.getCitizenGeneralInformation(encrypted);
    res.send(json);
});

const PORT = 5000;
app.listen(PORT, () => console.log('Listening port %d...', PORT));