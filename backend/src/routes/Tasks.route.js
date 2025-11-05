// Imports
const express = require('express');
const TaskController = require('../controllers/Task.controller.js');

// Defining router for Tasks
const router = express.Router();

// Configuration for Tasks routes
router
    .get('/tasks', TaskController.getAll);
    // .get('/tasks/:id')
    // .post('/tasks/')
    // .put('/tasks/:id')
    // .patch('/task/:id/status')
    // .delete('/task/:id')

module.exports = router;