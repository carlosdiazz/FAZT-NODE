const {PORT} = require('./src/config/config');
const app = require('./src/app/app');

const main = async () => {

    try{
        app.listen(PORT, () => {
            console.log(`El server esta corriendo en el puerto ${PORT}`);
        });
    }catch{
        console.error('El server no se levanto en el Puerto', error);
    }

}


main();