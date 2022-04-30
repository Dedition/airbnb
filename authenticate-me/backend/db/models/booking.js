'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('booking', {
    id: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.INTEGER,
    endDate: DataTypes.INTEGER
  }, {});
  Booking.associate = function (models) {
    // associations can be defined here
    Booking.belongsTo(models.Spot, { foreignKey: "spotId" });
    Booking.belongsTo(models.User, { foreignKey: "userId" });

  };
  return Bookings;
};
