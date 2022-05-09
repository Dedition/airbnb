const express = require('express');
const asyncHandler = require('express-async-handler');
const imageUrls = require('../../assets/spot-images/imageurls.json');

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    // console.log(imageUrls)
    // const images = JSON.parse(imageUrls);
    // console.log(`Returning ${imageUrls[parseInt(req.params.id)]}`);
    console.log('Returning image URLs')
    return res.json(imageUrls);
}));

module.exports = router;
