const {Router} = require('express');
const projectRoutes = require('./projects.routes')

const routerAPI = (app) => {
    const router = Router();

    app.use('/api/v1', router);
        router.use('/projects', projectRoutes);

}

module.exports = routerAPI;