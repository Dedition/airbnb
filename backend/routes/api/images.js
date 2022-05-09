const express = require('express');
const asyncHandler = require('express-async-handler');
const imageUrls = require('../../assets/spot-images/imageurls.json');

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    return res.json(imageUrls);
}));

module.exports = router;
