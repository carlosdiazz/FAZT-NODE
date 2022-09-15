const {Router} = require('express');
const passport = require('passport');
const {sucessResponse} =require('../middlewares/response.middlewares')
const authRouter = Router();
const jsonwebtoken = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/config');


// Rutas de proyectos
authRouter.post('/login',

    passport.authenticate('local', {session: false}),
    async (req, res, next) => {
        try{

            const {user} = req;
            const payload = {
                sub: user.id,
                role: user.role
            }
            const token = jsonwebtoken.sign(payload, JWT_SECRET);
            const data = {
                token,
                user
            }
            sucessResponse(req, res, data, 'Inicio Seccion Correcto', 200);
        }catch (error) {
            next(error);
        }
    }
);



module.exports = authRouter;