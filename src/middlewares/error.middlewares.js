// Aqui pasaremos los middlewares que voy a usar para controlar los errorres

const boomErrorHandler = (err, req, res, next) => {

    if(err.isBoom){
        res.status(err.output.statusCode).json({
            data: {},
            message: err.output.payload.message,
            statusCode: err.output.statusCode,
            error: err.output.payload.error,

        })
    }else{
        next(err);
    }
}

const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        data: {},
        message: err.message,
        statusCode: 500,
        error: err.stack
    })
  }

module.exports = {
    errorHandler,
    boomErrorHandler
};
