'use strict';
module.exports = (sequelize, DataTypes) => {
  var Phone = sequelize.define('Phone', {
    number: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Phone.belongsTo(models.Contact, { foreignKey: 'contactId'})

      }
    }
  });
  return Phone;
};
