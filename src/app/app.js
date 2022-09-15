const express = require('express');
const routerAPI = require('../routes/index.routes');
const cors = require('cors');
const {boomErrorHandler, errorHandler} = require('../middlewares/error.middlewares')

// Inicializaciones de express
const app = express();

// Configuraciones y Middlewares
app.use(express.json());
app.use(cors());


// Rutas
routerAPI(app);


// Middlewares de error
app.use(boomErrorHandler);
app.use(errorHandler);



module.exports = app;
