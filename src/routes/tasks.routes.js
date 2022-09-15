const {Router} = require('express');
const {createTask, deleteTask, getOneTask, getTask, updateTask} = require('../services/task.services');

const validar = require('../middlewares/validar.middlewares');

//const {createProjectSchema} = require('../schemas/project.schemas');


const taksRouter = Router();

taksRouter.get('/',
    getTask
);

taksRouter.get('/:id',
    getOneTask
);

taksRouter.post('/',
    //validar(createProjectSchema,'body'),
    createTask
);

taksRouter.put('/:id',
    deleteTask
);

taksRouter.delete('/:id',
    updateTask
);



module.exports = taksRouter;