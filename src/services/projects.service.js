const boom = require('@hapi/boom');
const ProjectModel = require('../database/models/Project');
const TaskModel = require('../database/models/Task');
const {sucessResponse} = require('../middlewares/response.middlewares');

const getProjects = async(req, res, next) => {
    try{
        const projects = await ProjectModel.findAll();
        sucessResponse(req, res, projects, 'Lista de proyectos', 200);
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
        sucessResponse(req, res, product, 'Proyecto encontrado', 200);
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
        sucessResponse(req, res, newProject, 'Proyecto creado', 201);
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
        sucessResponse(req, res, project, 'Proyecto actualizado', 200);
    }catch(error){
        next(error);
    }
}

const deleteProject = async(req, res, next) => {
    try{
        const {id} = req.params;
        const project = await ProjectModel.findByPk(id);
        await ProjectModel.destroy({where: {id}});
        if(!project){
            throw boom.notFound('El proyecto no existe');
        }
        sucessResponse(req, res, project, 'Proyecto eliminado', 200);
    }catch(error){
        next(error);

    }
}

const getProjectTasks = async(req, res, next) => {
    try{
        const { id } = req.params;
        const tareas = await TaskModel.findAll({where: {projectId: id}})
        sucessResponse(req, res, tareas, 'Tareas del proyecto', 200);

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
    getProjectTasks
}