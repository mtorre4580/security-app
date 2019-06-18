const express = require('express');
const app = express();
const session = require('express-session');

// Handle session for App 
app.use(session({
    secret: 'security-app',
    resave: true,
    saveUninitialized: true
}));

// Views
app.get('/', (_req, res) => res.sendFile(`${__dirname}/views/index.html`));

app.get('/participate', (_req, res) => res.sendFile(`${__dirname}/views/participate.html`));

app.get('/participants', (req, res) => req.session && req.session.user ? res.sendFile(`${__dirname}/views/admin/participants.html`) : res.redirect('/login'));

// Login
app.get('/login', (_req, res) => res.sendFile(`${__dirname}/views/admin/login.html`));

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@gmail.com' && password === 'security') {
        req.session.user = { email };
        res.redirect('/participants');
    } else {
        res.redirect('/login');
    }
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = app;