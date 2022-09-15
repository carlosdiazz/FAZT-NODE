const jsonwebtoken = require('jsonwebtoken');
const {TOKEN_SECRET} = require('../config/config');

const secret = TOKEN_SECRET;
const token = 'eyJhbdGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInNjb3BlIjoiYWRtaW4iLCJpYXQiOjE2NjMyNzEyMzR9.S0Kujp_uNw5g-3Zcx_dX9Oxs2OJoSi75XJFmeSsKo5w'

const verifyToken = (token, secret) => {
    const verify = jsonwebtoken.verify(token, secret);
    return verify;
}

const respuesta = verifyToken(token, secret);


console.log(respuesta);