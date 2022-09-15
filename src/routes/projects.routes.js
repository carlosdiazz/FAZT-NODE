const {Router} = require('express');
const {createProject, deleteProject, getOneProject, getProjects, updateProject} = require('../services/projects.service');

const validar = require('../middlewares/validar.middlewares');

const {createProjectSchema} = require('../schemas/project.schemas');


const projectsRouter = Router();

projectsRouter.get('/',getProjects);

projectsRouter.get('/:id',
getOneProject
);

projectsRouter.post('/',
    validar(createProjectSchema,'body'),
    createProject
);

projectsRouter.put('/:id',
updateProject
);

projectsRouter.delete('/:id',
deleteProject
);



module.exports = projectsRouter;