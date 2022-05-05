// const { check } = require('express-validator');
// const { Spot } = require('../db/models');
// const { handleValidationErrors } = require('../utils/validation');

// // const address = check('address')
// //     .exists({ checkFalsy: true })
// //     .withMessage('Please provide an address.')
// //     .isLength({ min: 10 });
// // const city = check('city')
// //     .exists({ checkFalsy: true })
// //     .withMessage('Please provide a city.')
// //     .isString()
// //     .isLength({ min: 4 });
// // const state = check('state')
// //     .exists({ checkFalsy: true })
// //     .withMessage('Please provide a state.')
// //     .isString()
// //     .isLength({ min: 2 });
// // const country = check('country')
// //     .exists({ checkFalsy: true })
// //     .withMessage('Please provide a country.')
// //     .isLength({ min: 2 });
// // const name = check('name')
// //     .exists({ checkFalsy: true })
// //     .withMessage('Please provide a name.')
// //     .isLength({ min: 3 });
// // const price = check('price')
// //     .exists({ checkFalsy: true })
// //     .withMessage('Please provide a price.')
// // .isDecimal({ min: 0 });

// exports.validateCreate = [
//     address,
//     city,
//     state,
//     country,
//     name,
//     price,
//     handleValidationErrors
// ];

// exports.validateUpdate = [
//     address,
//     city,
//     state,
//     country,
//     name,
//     price,
//     handleValidationErrors
// ];
