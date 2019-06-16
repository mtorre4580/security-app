/**
 * Handle not found middleware for App 
 * @param {Object} err
 * @param {Object} request
 * @param {Object} res
 * @param {Function} next
 */
const notFoundHandler = (_req, res, _next) => {
    res.status(404).json({ message: 'Not found' });
};

module.exports = notFoundHandler;