const {Router} = require('express');

const projectsRouter = Router();

projectsRouter.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = projectsRouter;