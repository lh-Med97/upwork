// generateKey.js
const crypto = require('crypto');

const generateKey = () => {
    return crypto.randomBytes(32).toString('hex'); // Generates a 256-bit key
};

console.log(generateKey());