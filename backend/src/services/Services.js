// Imports
const dataSource = require('../models');

// Services function as controllers receivers, and it's right here we can see the bussiness rule
// For example, authentication (not every user can delete an user)
class Services {
    constructor(modelName) { // We are going to create this class based on the Model created by Sequelize
        this.model = modelName; 
    };

    // Return all records for the configured model
    async getAllRecords() {
        return dataSource[this.model].findAll();
    };

    async getRecordById(id) {
       // Expect an id parameter from the controller and pass it to Sequelize
       return dataSource[this.model].findByPk(id);
    }

    async createRecord(data) {
        return dataSource[this.model].create(data)
    }

    async updateRecordById(updatedData, id) {
        // Update method for Sequelize doesn't return the data
        // It returns an array of numbers for changed properties

        const updatedDataList = dataSource[this.model].update(updatedData, {
            where: {id: id}
        })

        if (updatedDataList[0] === 0) return false

        return true
    }

    async deleteRecordById(id) {
        return dataSource[this.model].destroy({ where: { id: id } });
    }

    async deleteAllRecords() {
        return dataSource[this.model].destroy({ where: {} });
    }
};

// Exports
module.exports = Services;