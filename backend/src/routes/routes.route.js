// Imports
import express from 'express';

// Defining default route
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ message: 'To-do List.' })
    });

    app.use(
        express.json()
)
};

// Exports
export default routes;