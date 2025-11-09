'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Title can't be empty.`
        }
      }
    },
    description: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Description can't be empty.`
        }
      }
    },
    status: {
      type: DataTypes.ENUM('to_do', 'in_progress', 'done'),
      allowNull: false,
      validate: {
        isIn: {
          args: [['to_do', 'in_progress', 'done']],
          msg: `Status can only be: 'to_do' || 'in_progress' || 'done'`
        },
        notEmpty: {
          msg: `Status can't be empty.`
        }
      }
    }
    }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks'
  });
  return Task;
};