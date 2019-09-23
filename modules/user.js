'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING(150),
    email: DataTypes.STRING(150),
    phone: DataTypes.STRING(20),
    password: DataTypes.STRING(500),
    salt: DataTypes.STRING(500),
    level: DataTypes.NUMERIC(1),
    status:{type:DataTypes.NUMERIC(1),defaultValue:1}
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};