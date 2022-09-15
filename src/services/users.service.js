const boom = require('@hapi/boom');
const {sucessResponse} = require('../middlewares/response.middlewares');
const UserModel = require('../database/models/User');


const getUsersAll = async (req, res, next) => {
    try{
        const users = await UserModel.findAll();
        sucessResponse(req, res, users, 'Lista de usuarios');
    }catch (error){
        next(error);
    }
}

const getUser = async (req, res, next) => {
    try{
        const {id} = req.params;
        const user = await UserModel.findByPk(id);
        if(!user){
            throw boom.notFound('El usuario no existe');
        }
        sucessResponse(req, res, user, 'Usuario encontrado', 200);
    }catch (error){
        next(error);
    }
}

const createUser = async (req, res, next) => {
    try{
        const {first_name, last_name, email, password, birth_date, phone, is_staff} = req.body

        const user = await UserModel.create({first_name, last_name, email, password, birth_date, phone, is_staff})
        sucessResponse(req, res, user, 'User creado', 201);

    }catch (error){
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try{

    }catch (error){
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try{

    }catch (error){
        next(error);
    }
}

module.exports = {
    getUsersAll,
    getUser,
    createUser,
    updateUser,
    deleteUser
}