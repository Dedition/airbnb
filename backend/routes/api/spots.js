const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const spotValidation = require('../../validations/spot');

const router = express.Router();
const stateValReg = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/;

router.get('/', asyncHandler(async (req, res) => {
    // console.log(req);
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

// router.put('/spots/:spotId', requireAuth, asyncHandler(async (req, res) => {
//     // console.log('WOORKKKKKINNNNNNNNNGGGGGGGGGGGGGG');
//     const { id } = req.params;
//     console.log('id', id);
//     // console.log('ENTERED THE PUT==========================', spotId);
//     const spotToUpdate = await Spot.findByPk(id);
//     // const { errors, isValid } = spotValidation(req.body);
//     // console.log(errors, 'HELLL=====================================')
//     // if (!isValid) {
//     //     return res.status(400).json({ errors });
//     // }
//     const spot = await spotToUpdate.update({ address, city, state, country, name, price });
//     return res.json({ spot });
// }));

router.get("/:id", asyncHandler(async (req, res) => {
    const spotId = await Spot.findByPk(req.params.id);
    return res.json({ spotId });
}));

router.post('/', asyncHandler(async (req, res) => {
    // console.log('HELLOOOOOOOOOOOOOO');
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

// const spotId = await Spot.destroy(req.params.id);
//     if (!spotId) {
//         return res.status(404).json({ message: 'Spot not found' });
//     }
//     return res.json({ spotId });
// }));

module.exports = router;
