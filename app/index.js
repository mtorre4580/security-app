const express = require('express');
const app = express();

app.get('/', (_req, res) => res.sendFile(__dirname + '/views/index.html'));

app.get('/participate', (_req, res) => res.sendFile(__dirname + '/views/participate.html'));

app.get('/login', (_req, res) => res.sendFile(__dirname + '/views/admin/login.html'));

app.post('/admin', (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@gmail.com' && password === '723478') {
        res.sendFile(__dirname + '/views/admin/participants.html');
    } else {
        res.sendFile(__dirname + '/views/admin/login.html');
    }
});

module.exports = app;