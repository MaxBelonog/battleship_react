'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Contact.hasMany(models.Phone, {
          foreignKey: 'contactId'
        })

      }
    }
  });
  return Contact;
};
