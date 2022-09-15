const {Router} = require('express');
const {createProject, deleteProject, getOneProject, getProjects, updateProject} = require('../services/projects.service');

const validar = require('../middlewares/validar.middlewares');

const {createProjectSchema, deleteProjectSchema, updateProjectSchema, getOneProjectSchema} = require('../schemas/project.schemas');


const projectsRouter = Router();

projectsRouter.get('/',
    getProjects
);

projectsRouter.get('/:id',
    validar(getOneProjectSchema, 'params'),
    getOneProject
);

projectsRouter.post('/',
    validar(createProjectSchema,'body'),
    createProject
);

projectsRouter.put('/:id',
    validar(getOneProjectSchema,'params'),
    validar(updateProjectSchema,'body'),
    updateProject
);

projectsRouter.delete('/:id',
    validar(deleteProjectSchema,'params'),
    deleteProject
);



module.exports = projectsRouter;