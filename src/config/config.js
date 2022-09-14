require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
}

module.exports = {
    PORT : config.port,
    DB_USER: config.dbUser,
    DB_PASSWORD: config.dbPassword,
    DB_NAME: config.dbName
};