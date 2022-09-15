const {Router} = require('express');
const passport = require('passport');
const {sucessResponse} =require('../middlewares/response.middlewares')
const authRouter = Router();

// Rutas de proyectos
authRouter.post('/login',

    passport.authenticate('local', {session: false}),
    async (req, res, next) => {
        try{
            sucessResponse(req, res, req.user, 'Inicio Seccion Correcto', 200);
        }catch (error) {
            next(error);
        }
    }
);



module.exports = authRouter;