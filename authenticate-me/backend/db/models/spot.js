'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spots = sequelize.define('spot', {
    userId: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    country: DataTypes.TEXT,
    name: DataTypes.TEXT,
    price: DataTypes.DECIMAL
  }, {});
  Spots.associate = function (models) {
    // associations can be defined here
    Spots.hasMany(models.Image, { foreignKey: "spotId" });
    Spots.hasMany(models.Review, { foreignKey: "spotId" });
  };
  return Spots;
};
