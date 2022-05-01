'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spotId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Spots' }
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      startDate: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      endDate: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bookings');
  }
};

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spotId: {
        type: Sequelize.INTEGER,
        references: { model: 'Spots' }
      },
      url: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('images');
  }
};

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      city: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      state: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      country: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('spots');
  }
};

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      city: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      state: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      country: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT(50)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('spots');
  }
};

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      spotId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Spots' }
      },
      review: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reviews');
  }
};

    Booking.belongsTo(models.Spot, { foreignKey: "spotId" });
    Booking.belongsTo(models.User, { foreign
 Images.belongsTo(models.Spot, { foreignKey: "spotId" });
   Reviews.belongsTo(models.User, { foreignKey: "userId" });
    Reviews.belongsTo(models.Spot, { foreignKey: "spotId" });
 Spots.hasMany(models.Image, { foreignKey: "spotId" });
    Spots.hasMany(models.Review, { foreignKey: "spotId" });

return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        spotId: 1,
        review: "Go with Best Choice",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),

      }

  {
        username: "Demo-User",
        email: "demo@demo.com",
        hashedPassword: "password",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

{
      spotId: 1,
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcustomhomesonline.com.au%2Fwp-content%2Fuploads%2F2017%2F02%2FGremmo-Homes-Display-Home-Custom-Homes-Online.jpg&f=1&nofb=1",
      createdAt: new Date(),
      updatedAt: new Date(),
    }

{
      userId: 1,
      spotId: 1,
      startDate: new Date(),
      endDate: new Date(),
      createdAt: new Date(),
