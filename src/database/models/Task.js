const {DataTypes} = require('sequelize');
const sequelize = require('../database');

const TaskModel = sequelize.define('Task', {
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
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
},{
    timestamps: false,
});

module.exports = TaskModel;