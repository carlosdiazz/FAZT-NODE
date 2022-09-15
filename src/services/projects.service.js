const boom = require('@hapi/boom');
const ProjectModel = require('../database/models/Project');

const getProjects = async(req, res, next) => {
    try{
        const projects = await ProjectModel.findAll();
        res.json(projects);
    }catch(error){
        next(error);
    }
}

const getOneProject = async(req, res, next) => {
    try{
        const {id} = req.params;
        const product = await ProjectModel.findByPk(id);
        if(!product){
            throw boom.notFound('El proyecto no existe');
        }
        res.json(product);
    }catch(error){
        next(error);
    }
}

const createProject = async(req, res, next) => {
    try{
        const {name, description, priority} = req.body;
        const newProject = await ProjectModel.create({
            name,
            description,
            priority,
        })
        res.json(newProject);
    }catch(error){
        next(error);
    }
}

const updateProject = async(req, res, next) => {
    try{
        const {id} = req.params;
        const {name, description, priority} = req.body;
        const project = await ProjectModel.findByPk(id);
        if(!project){
            throw boom.notFound('El proyecto no existe');
        }
        if(name){
            project.name = name;
        }
        if(description){
            project.description = description;
        }
        if(priority){
            project.priority = priority;
        }
        await project.save();
        res.json(project);

    }catch(error){
        next(error);
    }
}

const deleteProject = async(req, res, next) => {
    try{
        const {id} = req.params;
        const project = await ProjectModel.destroy({where: {id}});
        if(!project){
            throw boom.notFound('El proyecto no existe');
        }
        res.json('El proyecto fue eliminado');

    }catch(error){
        next(error);

    }
}

module.exports = {
    getProjects,
    getOneProject,
    createProject,
    updateProject,
    deleteProject,
}