const EthCrypto = require("eth-crypto");

async function getpatientJSON(encrypted, patientPrivateKey) {
    const decrypted = await EthCrypto.decryptWithPrivateKey(
        patientPrivateKey, // privateKey
        EthCrypto.cipher.parse(encrypted) // encrypted-data
    );

    return decrypted;
}

async function encryptDiagnose(diagnoseJSON, patientPublicKey) {
    const encrypted = await EthCrypto.encryptWithPublicKey(
        patientPublicKey,
        JSON.stringify(diagnoseJSON)
    );
    const encryptedString = EthCrypto.cipher.stringify(encrypted);
    return encryptedString;
}

function getPublicKey(patientPrivateKey) {
    const publicKey = EthCrypto.publicKeyByPrivateKey(patientPrivateKey);
    return publicKey;
}

module.exports = { getpatientJSON, encryptDiagnose, getPublicKey };
