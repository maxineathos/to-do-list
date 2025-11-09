const Services = require('./Services.js');
const dataSource = require('../models/index.js');

class TaskServices extends Services {
    constructor() {
        super('Task') // Return model based on model's name (configured by Sequelize and SQL databases)
    }

    // PATCH only the status for the task
    async updateTaskStatus(id, status) {
        return dataSource[this.model].update(
            { status },
            { where: { id } }
        );
    }
}

module.exports = TaskServices;