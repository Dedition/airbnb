const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review, User } = require('../../db/models');
const { Op } = require('sequelize');



// Do you want to create validators? You should
const { validateReview, validatePUT } = require('../../validations/reviews');
const router = express.Router();

// router.get('/', asyncHandler(async (req, res) => {
//     const reviews = await Review.findAll();
//     return res.json({ reviews });
// }));


// IT'S CALLED 'id'. DON'T FORGET IT
router.put('/:id', validatePUT, validateReview, asyncHandler(async (req, res, next) => {
    const id = req.body.id;
    console.log(req.params.id)

    delete req.body.id;
    const updatedReview = await Review.update(req.body, { where: { id }, returning: true, plain: true });
    return res.json(await Review.findByPk(id, { include: [User] }));
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    console.log();
    console.log(req.body);
    return res.json(await Review.deleteReview({
        where:
            { id: req.params.id }
    }));
}));

module.exports = router;
