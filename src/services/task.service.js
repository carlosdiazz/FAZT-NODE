const boom = require('@hapi/boom');
const TaskModel = require('../database/models/Task');

const getTask = async(req, res, next) => {
    try{
        const tasks = await TaskModel.findAll();
        res.json(tasks);
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
        res.json(task);
    }catch (error){
        next(error);
    }
}

const createTask = async(req, res, next) => {
    try{
        const {name, description, done, projectId} = req.body;
        if(projectId){
            const task = await TaskModel.create({name, description, done, projectId});
            res.status(201).json(task);
        }else{
            const task = await TaskModel.create({name, description, done});
            res.status(201).json(task);
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
        if(name){
            task.name = name;
        }
        if(description){
            task.description = description;
        }
        if(done){
            task.done = done;
        }
        await task.save();
        res.json(task);

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
        res.json('Tarea eliminada');
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