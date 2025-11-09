const database = require("../models/index.js");
const Controller = require("./Controller.js");
const TaskServices = require("../services/Task.service.js");

const taskServices = new TaskServices();

class TaskController extends Controller {
  constructor() {
    super(taskServices);
  }

  async updateStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const task = await this.serviceEntity.getRecordById(id);
      if (!task) {
        return res.status(404).json({ message: "Task not found", status: 404 });
      }

      await this.serviceEntity.updateTaskStatus(Number(id), status);
      return res.status(200).json({
        message: `Task status updated to: ${status}`,
        status: 200,
      });
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        return res.status(400).json({
          message: "Invalid status value",
          error: error.message,
          status: 400,
        });
      }
      return res.status(500).json({
        message: "Internal server error",
        error: error.message,
        status: 500,
      });
    }
  }
}

// Export an instance so routes can call methods directly (e.g. taskController.getAll)
module.exports = new TaskController();
