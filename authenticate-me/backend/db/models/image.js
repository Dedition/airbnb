'use strict';
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('image', {
    spotId: DataTypes.INTEGER,
    url: DataTypes.TEXT
  }, {});
  Images.associate = function (models) {
    // associations can be defined here
    Images.belongsTo(models.Spot, { foreignKey: "spotId" });

  };
  return Images;
};
