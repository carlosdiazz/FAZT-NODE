const boom = require('@hapi/boom');



const getTask = (req, res) => {
    //throw new boom.notAcceptable('No se puede acceder a la base de datos');
    res.send('Hola mundo');
}

const getOneTask = (req, res) => {
    res.send('Hola mundo');
}


const createTask = (req, res) => {
    res.send('Hola mundo');
}

const updateTask = (req, res) => {
    res.send('Hola mundo');
}

const deleteTask = (req, res) => {
    res.send('Hola mundo');
}

module.exports = {
    getTask,
    getOneTask,
    createTask,
    updateTask,
    deleteTask,
}