const boom = require('@hapi/boom');
const {sucessResponse} = require('../middlewares/response.middlewares');
const UserModel = require('../database/models/User');
const bcrypt = require('bcrypt')

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
        const {first_name, last_name, email, password, birth_date, phone, is_staff, nick_name, role} = req.body
        const hash = await bcrypt.hash(password, 10)
        const user = await UserModel.create({first_name, last_name, email, birth_date, phone, is_staff,nick_name, role, password: hash})
        delete user.dataValues.password
        sucessResponse(req, res, user, 'User creado', 201);

    }catch (error){
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try{
        const {id} = req.params;
        const {first_name, last_name, email, password, birth_date, phone, is_staff, is_active, role} = req.body
        const user = await UserModel.findByPk(id);

        if(!user){
            throw boom.notFound('El usuario no existe');
        }
        if(first_name){user.first_name=first_name}
        if(last_name){user.last_name=last_name}
        if(email){user.email=email}
        if(password){user.password=password}
        if(birth_date){user.birth_date=birth_date}
        if(phone){user.phone=phone}
        if(is_staff){user.is_staff=is_staff}
        if(is_active){user.is_active=is_active}
        if(role){user.role=role}
        await user.save();
        sucessResponse(req, res, user, 'Usuario actualizada', 200);
    }catch (error){
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try{
        const {id} = req.params;
        const user = await UserModel.findByPk(id);
        await UserModel.destroy({where: {id}});

        if(!user){
            throw boom.notFound('El usuario no existe');
        }
        sucessResponse(req, res, user, 'Usuario eliminado', 200);
    }catch (error){
        next(error);
    }
}

const findByNickname = async (nickname) => {
    const user = await UserModel.findOne({where: {nick_name: nickname}});
    return user;
}

module.exports = {
    getUsersAll,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    findByNickname
}