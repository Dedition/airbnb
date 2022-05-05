const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Review, User } = require('../../db/models');

// Do you want to create? You should
const { validateReview, validatePUT } = require('../../validations/review');

router.route('/:reviewId')
    .put(asyncHandler(async (req, res) => {
        const id = await req.body.id;
        delete req.body.id;
        const updatedReview = await Review.update(req.body, {
            where: { id },
            returning: true,
            plain: true
        });
        res.status(200).json(updatedReview[1]);
    }))
    .delete(asyncHandler(async (req, res) => {
        res.json(await Review.deleteReview(req.params.reviewId));
    }));
