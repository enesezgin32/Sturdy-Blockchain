const crypto = require('crypto-js');
const joi = require('joi');
const express = require('express');
const contract = require('./contractFunctions.js');

const app = express();

const masterKey = 'getSturdyEyEyEy';

const ciphertext = crypto.AES.encrypt('my message', masterKey).toString();

const citizen = {
        id: "10154859744",
        name: "Kadircan",
        surname: "Bozkurt",
        dateOfBirth: "23.12.2000",
        gender: "Male",
        nationality: "TR",
        bloodGroup: "Brh+",
        diagnosises:
        [
            {
                id: "1",
            },
            {
                id: "2",
            }
        ]
    };

app.use(express.json());
app.get('/api', (req, res) => {
    res.send(ciphertext);
});

app.post('/api/citizenGeneral/', (req, res) => {
    console.log(req.body.name);
    const encrypted = crypto.AES.decrypt(req.body.name, masterKey).toString(crypto.enc.Utf8);
    const json = contract.getCitizenGeneralInformation(encrypted);
    res.send(json);
});

app.listen(3000, () => console.log('Listening port %d...', 3000));