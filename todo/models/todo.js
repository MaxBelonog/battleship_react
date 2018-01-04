'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Todo.belongsTo(models.Person, { foreignKey: 'personId' })
      }
    }
  });
  return Todo;
};
