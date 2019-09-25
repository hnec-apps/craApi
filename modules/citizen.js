'use strict';
module.exports = (sequelize, DataTypes) => {
  const Citizen = sequelize.define('Citizen', {
    person_id: DataTypes.NUMERIC(15),
    national_id: DataTypes.STRING(20),
    first_name: DataTypes.STRING(150),
    father_name: DataTypes.STRING(150),
    grand_name: DataTypes.STRING(150),
    family_name: DataTypes.STRING(150),
    mother_name: DataTypes.STRING(150),
    birth_date: DataTypes.DATE(),
    gender: DataTypes.NUMERIC(2),
    is_alive: DataTypes.STRING(10),
    registry_number: DataTypes.STRING(30),
    deleted: DataTypes.NUMERIC(1)
  }, {});
  Citizen.associate = function (models) {
    // associations can be defined here
  };
  return Citizen;
};