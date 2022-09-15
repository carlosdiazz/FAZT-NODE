const {DataTypes} = require('sequelize');
const sequelize = require('../database');
const TaskModel= require('./Task');

const ProjectModel = sequelize.define('Project', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

// Aqui se crea la relacion entre las tablas, en este caso, una relacion de uno a muchos (1:N) entre Project y Task (1 proyecto tiene muchas tareas)
ProjectModel.hasMany(TaskModel, {
    foreignKey: 'projectId',
    sourceKey: 'id',
})

// Aqui se crea la relacion inversa, en este caso, una relacion de uno a muchos (1:N) entre Task y Project (1 tarea pertenece a un proyecto)
TaskModel.belongsTo(ProjectModel, {
    foreignKey: 'projectId',
    targetId: 'id',
})

module.exports = ProjectModel;