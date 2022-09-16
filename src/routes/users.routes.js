const {Router} = require('express')
const passport = require('passport')

const validar = require('../middlewares/validar.middlewares')
const {createUserSchema, deleteUserSchema, getUserSchema, updateUserSchema} = require('../schemas/users.schemas')
const {updateUser, createUser, getUser, getUsersAll, deleteUser} = require('../services/users.service')
const usersRouter = Router()
const {checkAdmin, checkRoles} = require('../middlewares/auth.middlewares');

usersRouter.get(
    '/',
    passport.authenticate('jwt', {session: false}),
    checkRoles('admin', 'user'),
    getUsersAll
)

usersRouter.get(
    '/:id',
    validar(getUserSchema, 'params'),
    passport.authenticate('jwt', {session: false}),
    checkRoles('admin', 'user'),
    getUser
)

usersRouter.post(
    '/',
    validar(createUserSchema, 'body'),
    passport.authenticate('jwt', {session: false}),
    //checkAdmin,
    checkRoles('admin'),
    createUser
)

usersRouter.put(
    '/:id',
    validar(getUserSchema, 'params'),
    validar(updateUserSchema, 'body'),
    passport.authenticate('jwt', {session: false}),
    checkRoles('admin', 'user'),
    updateUser
)

usersRouter.delete(
    '/:id',
    validar(deleteUserSchema, 'params'),
    checkRoles('admin', 'user'),
    deleteUser

)

module.exports = usersRouter