const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, Review } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const spotValidation = require('../../validations/spot');

const router = express.Router();
const stateValReg = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/;

router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll();
    return res.json({ spots });
}));

router.put('/:id', requireAuth, asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, description, address, city, state, country, price } = req.body;

    const spot = await Spot.findByPk(id);
    if (!spot) {
        return res.status(404).json({ message: 'Spot not found' });
    }

    await spot.update({ name, description, address, city, state, country, price });

    return res.json({ spot });
}));

router.get("/:id", asyncHandler(async (req, res) => {
    const spotId = await Spot.findByPk(req.params.id);
    return res.json({ spotId });
}));

router.get("/:id/reviews", asyncHandler(async (req, res) => {
    const spotId = await Spot.findByPk(req.params.id);
    //! You can't use findAll
    const reviews = await spotId.getReviews();
    return res.json(reviews);
}));


router.post("/:id/reviews", requireAuth, asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { rating, content, cleanliness, communication } = req.body;
    const spot = await Spot.findByPk(id);
    const review = await spot.createReview({ rating, content, cleanliness, communication, userId: req.user.id });
    return res.json({ review });

}));

router.post('/', asyncHandler(async (req, res) => {
    const { userId, address, city, state, country, name, price } = req.body;
    const newSpot = await Spot.build({ userId, address, city, state, country, name, price });
    await newSpot.save();
    return res.json({ newSpot });
}));


router.delete('/:spotId', asyncHandler(async (req, res) => {
    const { spotId } = req.params;
    const spotToDestroy = await Spot.findByPk(spotId);
    if (spotToDestroy) {
        await spotToDestroy.destroy();
        return res.json({ message: 'Spot deleted' });
    }
    return res.status(404).json({ message: 'Spot not found' });
}));


router.delete('/reviews/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reviewToDestroy = await Review.findByPk(id);
    if (reviewToDestroy) {
        await reviewToDestroy.destroy();
        return res.json({ message: 'Review deleted' });
    }
    return res.status(404).json({ message: 'Review not found' });
}));

module.exports = router;
