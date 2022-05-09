const express = require('express');
const asyncHandler = require('express-async-handler');
const imageUrls = require('../../assets/images/image_urls.json');

router.get("/:id", asyncHandler(async (req, res) => {
    const images = JSON.parse(imageUrls);
    return images[id].url;
}));

module.exports = router;
