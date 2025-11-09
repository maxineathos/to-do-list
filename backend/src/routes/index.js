// Imports
const express = require("express");
const tasks = require("./Tasks.route.js");

// Defining default route
const routes = (app) => {
  app.route("/").get((req, res) => {
    res
      .status(200)
      .send({
        title: "To-do List. See your tasks in: http://localhost:3000/tasks/",
      });
  });
  app.use(express.json(), tasks);
};

module.exports = routes;
