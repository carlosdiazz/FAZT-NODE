const express = require('express');
const routerAPI = require('../routes/index.routes');
const cors = require('cors');
const {boomErrorHandler, errorHandler} = require('../middlewares/error.middlewares')
const {checkAuth} = require('../middlewares/auth.middlewares');
const {sucessResponse} = require('../middlewares/response.middlewares');
const passport = require('passport')

// Inicializaciones de express
const app = express();


app.get('/', (req, res) => {
    sucessResponse(req, res, {}, 'este es mi server en Xpress');
});

app.get('/admin', checkAuth, (req, res) => {
    sucessResponse(req, res, {}, 'SI ESTA AUTENTICADO ENTRA');
});

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
app.use(boomErrorHandler);
app.use(errorHandler);



module.exports = app;
