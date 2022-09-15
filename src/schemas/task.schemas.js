const Joi = require('joi');

const id = Joi.number().integer().min(1);
const name = Joi.string().min(3).max(30);
const description = Joi.string().min(3).max(100);
const done = Joi.boolean();
const projectId = Joi.number().integer().min(1);

const createTaskSchema = Joi.object({
    name: name.required(),
    description: description.required(),
    done: done,
    projectId: projectId
});

const updateTaskSchema = Joi.object({
    name: name,
    description: description,
    done: done
});

const getTaskSchema = Joi.object({
    id: id.required()
});

const deleteTaskSchema = Joi.object({
    id: id.required()
});


module.exports = {
    createTaskSchema,
    updateTaskSchema,
    getTaskSchema,
    deleteTaskSchema
}


