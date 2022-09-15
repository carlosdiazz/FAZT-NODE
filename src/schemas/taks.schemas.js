const Joi = require('joi');

const id = Joi.number().integer().min(1);
const name = Joi.string().min(3).max(30);
const description = Joi.string().min(3).max(100);
const done = Joi.boolean();

const createTaskSchema = Joi.object({
    name: name.required(),
    description: description.required(),
    done: done
});

module.exports = {
    createTaskSchema
}


