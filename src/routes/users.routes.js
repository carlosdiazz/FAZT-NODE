const {Router} = require('express')

const validar = require('../middlewares/validar.middlewares')
const {createUserSchema, deleteUserSchema, getUserSchema, updateUserSchema} = require('../schemas/users.schemas')
const {updateUser, createUser, getUser, getUsersAll, deleteUser} = require('../services/users.service')
const usersRouter = Router()

usersRouter.get(
    '/',
    getUsersAll
)

usersRouter.get(
    '/:id',
    validar(getUserSchema, 'params'),
    getUser
)

usersRouter.post(
    '/',
    validar(createUserSchema, 'body'),
    createUser
)

usersRouter.put(
    '/:id',
    validar(getUserSchema, 'params'),
    validar(updateUserSchema, 'body'),
    updateUser
)

usersRouter.delete(
    '/:id',
    validar(deleteUserSchema, 'params'),
    deleteUser

)

module.exports = usersRouter