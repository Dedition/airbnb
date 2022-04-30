'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('review', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {});
  Reviews.associate = function (models) {
    // associations can be defined here
    Reviews.belongsTo(models.User, { foreignKey: "userId" });
    Reviews.belongsTo(models.Spot, { foreignKey: "spotId" });
  };
  return reviews;
};
