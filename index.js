const {PORT} = require('./src/config/config');
const app = require('./src/app/app');
const sequelize = require('./src/database/database');
const ProjectModel = require('./src/models/Project');                       // CREA LAS TABLAS EN LA BASE DE DATOS

const main = async () => {

    try{
        await sequelize.authenticate();                                     // UNA PRUEBA DE CONEXION
        await sequelize.sync();                                             // CREA LAS TABLAS EN LA BASE DE DATOS
        console.log('Se conecto a la base de datos');
        app.listen(PORT, () => {
            console.log(`El server esta corriendo en el puerto ${PORT}`);
        });
    }catch{
        console.error('NO SE PUDO CONECTAR A LA BASE DE DATO', error);
    }

}


main();