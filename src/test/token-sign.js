const jsonwebtoken = require('jsonwebtoken');
const {TOKEN_SECRET} = require('../config/config');

const secret = TOKEN_SECRET;

const payload = {
    sub: 1,
    scope: 'admin'

}

const signToken = (payload, secret) => {
    const token = jsonwebtoken.sign(payload, secret);
    return token;
}

const token = signToken(payload, secret);
console.log(token);