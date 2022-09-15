const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const description = Joi.string().min(3).max(100);
const priority = Joi.number().integer().min(1).max(10);

const createProjectSchema = Joi.object({
    name: name.required(),
    description: description.required(),
    priority: priority.required(),
});

module.exports = {
    createProjectSchema
}