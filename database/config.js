const moongose = require('mongoose');

const dbConnection = async () => {
    try {
        await moongose.connect( process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology : true,
        });
        console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos - hable con el administrador');
    }
}


module.exports = {
    dbConnection
}