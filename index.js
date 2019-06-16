const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const authHandler = require('./middlewares/authHandler');
const notFoundHandler = require('./middlewares/notFoundHandler');

const API = require('./api');
const App  = require('./app');

const port = process.env.PORT || 3000;

// Body parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Static files (css, js, images)
server.use(express.static(__dirname + '/app/static'));

// Disable etag for performance
server.disable('etag');

// Disable x-powered-by to hide technology
server.disable('x-powered-by');

// App
server.use(App);

// Middleware for auth
server.use(authHandler);

// API
server.use('/api', API);

// Middleware for 404
server.use(notFoundHandler);

// Middleware for errors
server.use(errorHandler);

server.listen(port, () => console.info('Server is running at:', port));