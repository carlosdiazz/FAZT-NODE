const {Router} = require('express');
const {createProject, deleteProject, getOneProject, getProjects, updateProject, getProjectTasks} = require('../services/projects.service');

const validar = require('../middlewares/validar.middlewares');

const {createProjectSchema, deleteProjectSchema, updateProjectSchema, getOneProjectSchema} = require('../schemas/project.schemas');


const projectsRouter = Router();

// Rutas de proyectos
projectsRouter.get('/',
    getProjects
);

//Ruta para obtener un proyecto
projectsRouter.get('/:id',
    validar(getOneProjectSchema, 'params'),
    getOneProject
);

//Ruta para crear un proyecto
projectsRouter.post('/',
    validar(createProjectSchema,'body'),
    createProject
);

//Ruta para actualizar un proyecto
projectsRouter.put('/:id',
    validar(getOneProjectSchema,'params'),
    validar(updateProjectSchema,'body'),
    updateProject
);

//Ruta para eliminar un proyecto
projectsRouter.delete('/:id',
    validar(deleteProjectSchema,'params'),
    deleteProject
);

//Ruta para obtener las tareas de un proyecto
projectsRouter.get('/:id/tasks',
    validar(getOneProjectSchema, 'params'),
    getProjectTasks
);

module.exports = projectsRouter;