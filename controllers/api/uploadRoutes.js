const router = require('express').Router();
const cloudinary = require('cloudinary').v2;
const { Image } = require('../../models');

router.post('/', async (req, res) => {
    // try {
    //     const newImage = await Image.create(req.body);
    //     res.status(200).json(newImage);
    // } catch {
    //     res.status(500).json(err);
    // }
    console.log(req.imageBlob)
});

module.exports = router;