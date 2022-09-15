const {Router} = require('express');
const projectRoutes = require('./projects.routes')
const taskRoutes = require('./tasks.routes')
const userRoutes = require('./users.routes')
const authRoutes = require('./auth.routes')
const boom = require('@hapi/boom');

const routerAPI = (app) => {
    const routerV1 = Router();

    app.use('/api/v1', routerV1);
        routerV1.use('/projects', projectRoutes);
        routerV1.use('/task', taskRoutes);
        routerV1.use('/users', userRoutes);
        routerV1.use('/auth', authRoutes);


    app.all('*', (req, res, next) => {
        next(boom.notFound('La ruta no existe'));
    })

}

module.exports = routerAPI;