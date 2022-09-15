const {Router} = require('express');
const {createTask, deleteTask, getOneTask, getTask, updateTask} = require('../services/task.service');

const validar = require('../middlewares/validar.middlewares');

const  {createTaskSchema, deleteTaskSchema, getTaskSchema, updateTaskSchema} = require('../schemas/task.schemas');


const taksRouter = Router();

taksRouter.get('/',
    getTask
);

taksRouter.get('/:id',
    validar(getTaskSchema, 'params'),
    getOneTask
);

taksRouter.post('/',
    validar(createTaskSchema,'body'),
    createTask
);

taksRouter.put('/:id',
    validar(getTaskSchema, 'params'),
    validar(updateTaskSchema, 'bofy'),
    updateTask
);

taksRouter.delete('/:id',
    validar(deleteTaskSchema, 'params'),
    deleteTask
);



module.exports = taksRouter;