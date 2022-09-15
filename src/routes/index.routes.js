const {Router} = require('express');
const projectRoutes = require('./projects.routes')
const taskRoutes = require('./tasks.routes')

const routerAPI = (app) => {
    const routerV1 = Router();

    app.use('/api/v1', routerV1);
        routerV1.use('/projects', projectRoutes);
        routerV1.use('/task', taskRoutes);

}

module.exports = routerAPI;