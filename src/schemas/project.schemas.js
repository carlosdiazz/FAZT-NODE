const Joi = require('joi');

const id = Joi.number().integer().min(1);
const name = Joi.string().min(3).max(30);
const description = Joi.string().min(3).max(100);
const priority = Joi.number().integer().min(1).max(10);

const createProjectSchema = Joi.object({
    name: name.required(),
    description: description.required(),
    priority: priority.required(),
});

const deleteProjectSchema = Joi.object({
    id: id.required(),
});

const updateProjectSchema = Joi.object({
    name: name,
    description: description,
    priority: priority,
});

const getOneProjectSchema = Joi.object({
    id: id.required(),
});

module.exports = {
    createProjectSchema,
    deleteProjectSchema,
    updateProjectSchema,
    getOneProjectSchema

}