const crypto = require('crypto-js');

const joi = require('joi');
const express = require('express');
const app = express();

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

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => console.log('Listening port %d...', 3000));