const boom = require('@hapi/boom');



const getProjects = (req, res) => {
    throw new boom.notAcceptable('No se puede acceder a la base de datos');
    res.send('Hola mundo');
}

const getOneProject = (req, res) => {
    res.send('Hola mundo');
}


const createProject = (req, res) => {
    res.send('Hola mundo');
}

const updateProject = (req, res) => {
    res.send('Hola mundo');
}

const deleteProject = (req, res) => {
    res.send('Hola mundo');
}

module.exports = {
    getProjects,
    getOneProject,
    createProject,
    updateProject,
    deleteProject,
}