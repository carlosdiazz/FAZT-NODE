const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')


const {Strategy} = require('passport-local');

const {findByNickname} = require('../../../services/users.service');

const LocalStrategy = new Strategy(
    {
        usernameField: 'nick_name',
        passwordField: 'password',
    },

    async (username, password, done) => {
    try{
        const user = await findByNickname(username);                        // Busco El user por su nickname
        if(!user){
            return done(boom.unauthorized('El nick_name no existe'), false);
        }
        const verify = await bcrypt.compare(password, user.password)        // Verifico que la contraseña sea correcta

        if(!verify){                                                        // Si no es correcta retorno un error
            return done(boom.unauthorized('Contrasena Incorrecta'), false);
        }
        delete user.dataValues.password;                                    // Elimino la contraseña del objeto user
        return done(null, user);                                            // Si es correcta retorno el user

    }catch (error){
        return done(error, false);
    }


});

module.exports = LocalStrategy;