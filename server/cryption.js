const EthCrypto = require("eth-crypto");

async function getpatientJSON(encrypted, patientPrivateKey) {
    const parsedString = EthCrypto.cipher.parse(encrypted);
    const decrypted = await EthCrypto.decryptWithPrivateKey(
        patientPrivateKey, // privateKey
        EthCrypto.cipher.parse(parsedString) // encrypted-data
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
