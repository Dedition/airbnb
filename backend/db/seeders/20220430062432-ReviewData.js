'use strict';
const reviewData = require('../../assets/reviews.json');
const newReview = [];

reviewData.forEach(review => {
  newReview.push({
    userId: Math.floor(Math.random() * 3) + 1,
    spotId: Math.floor(Math.random() * 20) + 1,
    rating: Math.floor(Math.random() * 5) + 1,
    communication: Math.floor(Math.random() * 5) + 1,
    cleanliness: Math.floor(Math.random() * 5) + 1,
    content: review.content
  });
  console.log(review);
});
// console.log(newReview);

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
    return queryInterface.bulkInsert('Reviews', [{
      userId: 1,
      spotId: 1,
      content: 'This is a great spot',
      communication: 4,
      cleanliness: 2,
      rating: 5
    },
    ...newReview,
    ],
      {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
