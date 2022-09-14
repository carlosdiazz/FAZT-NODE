const express = require('express');
const routerAPI = require('../routes/index.routes');
const app = express();

app.use(express.json());
routerAPI(app);


module.exports = app;
