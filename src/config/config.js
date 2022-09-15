require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',                                        // USUARIO DE LA BASE DE DATOS
    dbPassword: process.env.DB_PASSWORD || '',                               // CONTRASEÑA DE LA BASE DE DATOS
    dbName: process.env.DB_NAME || '',                                      // NOMBRE DE LA BASE DE DATOS
}

module.exports = {
    PORT : config.port,
    DB_USER: config.dbUser,
    DB_PASSWORD: config.dbPassword,
    DB_NAME: config.dbName
};