'use strict';
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    requast: DataTypes.STRING(300),
    response: DataTypes.STRING(300)
  }, {});
  Log.associate = function (models) {
    // associations can be defined here
  };
  return Log;
};