'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Properties' }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cleanliness: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    communication: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    scopes: {
      reviewDataOnly: {
        attributes: { exclude: ['userId', 'content'] }
      },
      reviewContentOnly: {
        attributes: { exclude: ['spotId', 'rating', 'communication', 'checkIn', 'cleanliness'] }
      }
    }
  }, {});

  Review.createReview = async (reqData) => await Review.create(reqData);

  Review.getReviewsBySpotId = async (spotId) => await Review.findAll({
    where: { spotId }, order: [['createdAt', 'DESC']]
  });

  Review.getReviewsByUserId = async (id) => await Review.findByPk(id);

  Review.updateReview = async (details) => {
    const id = details.id
    delete details.id;
    await Review.update(details, {
      where: { id },
      returning: true,
      plain: true
    });
    return await Review.findByPk({ id });
  };

  Review.deleteReview = async (id) => {
    const review = await Review.findByPk(id);
    if (!review) throw new Error('Review not found. :( Create one!');
    await Review.destroy({ where: { id } });
    return review;
  }

  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Spot, { foreignKey: 'spotId' });
  };
  return Review;
};

// userId: DataTypes.INTEGER,
// spotId: DataTypes.INTEGER,
// review: DataTypes.STRING,
// rating: DataTypes.INTEGER
