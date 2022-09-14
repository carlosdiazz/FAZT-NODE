const {Sequelize} = require('sequelize');

const {DB_USER, DB_PASSWORD, DB_NAME} = require('../config/config');

const URI = `postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`;


const sequelize = new Sequelize(URI, {
    logging: false,
    dialect: 'postgres',
});

module.exports = sequelize;