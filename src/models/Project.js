const {DataTypes} = require('sequelize');
const sequelize = require('../database/database');

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

module.exports = ProjectModel;