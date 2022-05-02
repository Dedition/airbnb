const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot } = require('../../db/models');

const spotValidation = require('../../validations/spot');

const router = express.Router();
const stateValReg = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/;


router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll();
    return res.json(spots);
}));


router.get("/:id", asyncHandler(async (req, res) => {
    const spotId = await Spot.findOne(req.params.id);
    return res.json({ spotId });
}));

router.post('/', spotValidation.validateCreate, asyncHandler(async (req, res) => {
    const spotId = await Spot.createSpot(req.body);
    return res.redirect(`${req.baseUrl}/${spotId}`);
}));

module.exports = router;
