const crypto = require('crypto-js');
const joi = require('joi');
const express = require('express');
const cFunctions = require('./cFunctions');

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

app.get('/citizenGeneral/:id', (req, res) => {
    const encrypted = crypto.AES.encrypt(JSON.stringify(citizen), masterKey).toString();
    const json = cFunctions.getCitizenGeneralInformation(encrypted);
    res.send(json);
});

app.listen(3000, () => console.log('Listening port %d...', 3000));