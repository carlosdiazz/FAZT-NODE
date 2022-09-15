const boom = require('@hapi/boom');
const {API_KEY} = require ('../config/config');

const checkAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if(apiKey === API_KEY){
        next();
    }else{
        next(boom.unauthorized('ApiKey invalida'));
    }
};

module.exports = {
    checkAuth
};