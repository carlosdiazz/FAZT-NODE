
const sucessResponse = (req, res,data,message, status) => {
    res.status(status || 200).json({
        data: data || {},
        message: message || 'Succes',
        statusCode: status || 200,
        error: false

    });

}

module.exports = {
    sucessResponse,
};