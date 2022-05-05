const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot } = require('../../db/models');

const spotValidation = require('../../validations/spot');

const router = express.Router();
const stateValReg = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/;

router.get('/', asyncHandler(async (req, res) => {
    console.log(req);
    const spots = await Spot.findAll();
    return res.json({ spots });
}));

router.put('/listing/:id', asyncHandler(async (req, res) => {
    const { errors, isValid } = spotValidation(req.body);
    if (!isValid) {
        return res.status(400).json({ errors });
    }
    const { address, city, state, country, name, price } = req.body;
    const spot = await Spot.update({ address, city, state, country, name, price });
    return res.json(spot);
}));

router.get("/:id", asyncHandler(async (req, res) => {
    const spotId = await Spot.findOne(req.params.id);
    return res.json({ spotId });
}));

router.post('/', spotValidation.validateCreate, asyncHandler(async (req, res) => {
    const newSpot = await Spot.build(req.body);
    const savedRes = await newSpot.save();
    return res.json({ newSpot });
}));


router.delete('/:id', asyncHandler(async (req, res) => {
    const spotId = await Spot.destroy(req.params.id);
    if (!spotId) {
        return res.status(404).json({ message: 'Spot not found' });
    }
    return res.json({ spotId });
}));

module.exports = router;
