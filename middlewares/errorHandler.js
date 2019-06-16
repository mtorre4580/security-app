/**
 * Handle error middleware for App 
 * @param {Object} err
 * @param {Object} request
 * @param {Object} res
 * @param {Function} next
 */
const errorHandler = (err, _req, res, _next) => {
    res.status(500).json({ msg: 'Error in process', stack: err.stack });
};

module.exports = errorHandler;