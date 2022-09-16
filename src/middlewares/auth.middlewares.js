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

const checkAdmin = (req, res, next) => {
    const {role} = req.user;
    if(role === 'admin'){
        next();
    }else{
        next(boom.unauthorized('No tienes permisos para realizar esta accion'));
    }
};

//Con esta funcion vamos a vlaidar que tenga el rol
const checkRoles = (...roles) => {
    return (req, res, next) => {
        const {role} = req.user;
        if(roles.includes(role)){
            next();
        }else{
            next(boom.unauthorized('No tienes permisos para realizar esta accion'));
        }
    }
};

module.exports = {
    checkAuth,
    checkAdmin,
    checkRoles
};