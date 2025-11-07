const dataSource = require('../models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    };

    async getAllResgisters() {
        return dataSource[this.model].findAll();
    };
};

module.exports = Services;