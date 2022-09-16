
const sequelize = require('./database');
const ProjectModel = require('./models/Project');                       // CREA LAS TABLAS EN LA BASE DE DATOS
const TaskModel = require('./models/Task');                               // CREA LAS TABLAS EN LA BASE DE DATOS
const UserModel = require('./models/User');                               // CREA LAS TABLAS EN LA BASE DE DATOS

const connectionDB = async () => {

    try{
        await sequelize.authenticate();                                     // UNA PRUEBA DE CONEXION
        await sequelize.sync();                                             // CREA LAS TABLAS EN LA BASE DE DATOS //!Si uso {force:true}, borra las tablas y las vuelve a crear
        console.log('Se conecto a la base de datos');
    }catch (error){
        console.error('NO SE PUDO CONECTAR A LA BASE DE DATO', error);
    }

}

module.exports = {
    connectionDB,
};