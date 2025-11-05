// Imports
const express = require('express');
const tasks = require('./Tasks.route.js');

// Defining default route
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Curso de node'});
    });
    app.use(
        express.json(),
        tasks
    );
};

// Exports
module.exports = routes;