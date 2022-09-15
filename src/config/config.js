require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',                                        // USUARIO DE LA BASE DE DATOS
    dbPassword: process.env.DB_PASSWORD || '',                               // CONTRASEÑA DE LA BASE DE DATOS
    dbName: process.env.DB_NAME || '',                                      // NOMBRE DE LA BASE DE DATOS
    dbHost: process.env.DB_HOST || '',                                      // HOST DE LA BASE DE DATOS
    dbPort: process.env.DB_PORT || '',                                      // PUERTO DE LA BASE DE DATOS
    API_KEY: process.env.API_KEY || '',                                     // API KEY PARA AUTENTICACION

}

module.exports = {
    PORT : config.port,
    DB_USER: config.dbUser,
    DB_PASSWORD: config.dbPassword,
    DB_NAME: config.dbName,
    DB_HOST: config.dbHost,
    DB_PORT: config.dbPort,
    API_KEY: config.API_KEY

};