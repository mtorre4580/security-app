/**
 * Auth middleware handler via api-key 
 * @param {Object} request
 * @param {Object} res
 * @param {Function} next
 */
const authHandler = (req, res, next) => {
    if (req.headers['x-token'] && req.headers['x-token'] === '42e7a9400b81') {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authHandler;