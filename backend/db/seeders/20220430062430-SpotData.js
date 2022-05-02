'use strict';
const addressData = require('../../assets/addresses/address.json');
const newAdd = [];

addressData.forEach(address => {
  newAdd.push({
    userId: Math.floor(Math.random() * 3) + 1,
    address: address.address1,
    city: address.city,
    state: address.state,
    country: address.country,
    name: address.display_address[1],
    price: Math.floor(Math.random() * 10000000)
  });
});

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
    return queryInterface.bulkInsert('Spots', [{
      userId: 1,
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      name: 'Spot 1',
      price: 100
    },
    ...newAdd,
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
