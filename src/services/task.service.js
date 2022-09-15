const boom = require('@hapi/boom');
const TaskModel = require('../database/models/Task');
const {sucessResponse} = require('../middlewares/response.middlewares');

const getTask = async(req, res, next) => {
    try{
        const tasks = await TaskModel.findAll();
        sucessResponse(req, res, tasks, 'Lista de tareas');
    }catch (error){
        next(error);
    }
}

const getOneTask = async(req, res, next) => {
    try{
        const {id} = req.params;
        const task = await TaskModel.findByPk(id);
        if(!task){
            throw boom.notFound('La tarea no existe');
        }
        sucessResponse(req, res, task, 'Tarea encontrada', 200);
    }catch (error){
        next(error);
    }
}

const createTask = async(req, res, next) => {
    try{
        const {name, description, done, projectId} = req.body;
        if(projectId){
            const task = await TaskModel.create({name, description, done, projectId});
            sucessResponse(req, res, task, 'Tarea creada', 201);
        }else{
            const task = await TaskModel.create({name, description, done});
            sucessResponse(req, res, task, 'Tarea creada', 201);
        }

    }catch (error){
        next(error);
    }
}

const updateTask = async(req, res, next) => {
    try {
        const {id} = req.params;
        const {name, description, done} = req.body;
        const task = await TaskModel.findByPk(id);
        if(!task){
            throw boom.notFound('La tarea no existe');
        }
        if(name){task.name = name;}
        if(description){task.description = description;}
        if(done){task.done = done;}
        await task.save();
        sucessResponse(req, res, task, 'Tarea actualizada', 200);

    } catch (error) {
        next(error);
    }
}

const deleteTask = async(req, res, next) => {
    try{
        const {id} = req.params;
        const taks = await TaskModel.destroy({where: {id}});
        if(!taks){
            throw boom.notFound('La tarea no existe');
        }
        sucessResponse(req, res, taks, 'Tarea eliminada', 200);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getTask,
    getOneTask,
    createTask,
    updateTask,
    deleteTask,
}