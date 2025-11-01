// Imports
import express from 'express';

// Defining router for Tasks
const router = express.Router();

// Configuration for Tasks routes
router
    .get('/tasks')
    .get('/tasks/:id')
    .post('/tasks/')
    .put('/tasks/:id')
    .patch('/task/:id/status')
    .delete('/task/:id')