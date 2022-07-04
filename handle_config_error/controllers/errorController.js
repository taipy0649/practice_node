const httpStatus = require('http-status-codes')

exports.logError = (error, req, res, next) => {
    console.error(error.stack)
    next(error)
}

exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND
    res.status(errorCode)
    res.send(`${errorCode}: the page does not exsit !`)
}

exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR
    console.error(error.stack)
    res.status(errorCode)
    res.send(`${errorCode}: sorry, our application is expreriencing a problem.`)
}