// Imports
const express = require("express");

// Controller instance for Tasks (Task.controller exports an instance)
const taskController = require("../controllers/Task.controller.js");

// Defining router for Tasks
const router = express.Router();

// Configuration for Tasks routes
router
  // Get all tasks
  .get("/tasks", (req, res) => taskController.getAll(req, res))
  // Get tasks by ID
  .get("/tasks/:id", (req, res) => taskController.getById(req, res))
  // Create task
  .post("/tasks/", (req, res) => taskController.create(req, res))
  // Update task by ID
  .put("/tasks/:id", (req, res) => taskController.update(req, res))
  // Update status by ID
  .patch("/tasks/:id/status", (req, res) =>
    taskController.updateStatus(req, res)
  )
  // Delete all tasks
  .delete("/tasks", (req, res) => taskController.deleteAll(req, res))
  // Delete task by ID
  .delete("/tasks/:id", (req, res) => taskController.deleteById(req, res));

module.exports = router;
