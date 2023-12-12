const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.secretKey;

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, secretKey, { expiresIn: '30m' });
  return token;
};


const verifyToken = (token) => {
  try {
    const tokenWithoutPrefix = token.split(' ')[1];
    const prefix = token.split(' ')[0];
    if(prefix == "Bearer"){
    const decoded = jwt.verify(tokenWithoutPrefix, secretKey);
    return decoded;
    } else {
      return null
    }
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
