const database = require('../models/index.js');

class TaskController {
    static async getAll(req, res) {
        try {
            const tasksList = await database.Task.findAll();
            return res.status(200).json(tasksList);
        } catch (error) {
            
        }
    }
};

module.exports = TaskController;