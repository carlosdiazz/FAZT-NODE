const express = require('express');
const routerAPI = require('../routes/index.routes');
const cors = require('cors');
const {boomErrorHandler, errorHandler, logErrors} = require('../middlewares/error.middlewares')
const {checkAuth} = require('../middlewares/auth.middlewares');
const {sucessResponse} = require('../middlewares/response.middlewares');
const passport = require('passport')
const {connectionDB}=require('../database/connection');

// Inicializaciones de express
const app = express();


app.get('/', (req, res) => {
    sucessResponse(req, res, {}, 'este es mi server en Xpress');
});

// Middlewares
//Base de datos
connectionDB();

// Configuraciones y Middlewares
app.use(express.json());
app.use(cors());

//
app.use(passport.initialize({ session: false }));
require('../utils/auth');


// Autenticacion
app.use(checkAuth);

// Rutas
routerAPI(app);


// Middlewares de error
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



module.exports = app;
