const Joi = require('joi');

const id = Joi.number()
const first_name = Joi.string().min(3).max(30);
const last_name = Joi.string().min(3).max(30);
const email = Joi.string().email();
const password = Joi.string().min(8).max(30);
const birth_date = Joi.date();
const phone = Joi.number()
const is_active = Joi.boolean();
const is_staff = Joi.boolean();
const nick_name = Joi.string().min(3).max(30);

const createUserSchema = Joi.object().keys({
    first_name: first_name.required(),
    last_name: last_name.required(),
    email: email.required(),
    password: password.required(),
    birth_date: birth_date.required(),
    phone: phone.required(),
    is_staff: is_staff.required(),
    nick_name: nick_name.required(),
})

const getUserSchema = Joi.object().keys({
    id: id.required()
})

const updateUserSchema = Joi.object().keys({
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
    birth_date: birth_date,
    phone: phone,
    is_staff: is_staff,
    is_active: is_active,
    nick_name: nick_name,
})

const deleteUserSchema = Joi.object().keys({
    id: id.required()
})

module.exports = {
    getUserSchema,
    createUserSchema,
    updateUserSchema,
    deleteUserSchema
}