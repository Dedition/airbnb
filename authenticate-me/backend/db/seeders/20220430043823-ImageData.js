'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Images', [{
      spotId: 1,
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcustomhomesonline.com.au%2Fwp-content%2Fuploads%2F2017%2F02%2FGremmo-Homes-Display-Home-Custom-Homes-Online.jpg&f=1&nofb=1",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Images', null, {});
  }
};
