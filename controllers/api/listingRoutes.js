const router = require('express').Router();
const xss = require("xss");
const { Listing, User } = require('../../models');

module.exports = router;

// GET all listings
router.get('/', async (req, res) => {
    try {
        const listingData = await Listing.findAll({
            include: [{ model: User, attributes: ['name'] }],
        });
        res.status(200).json(listingData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single listing
router.get('/:id', async (req, res) => {
    try {
        const listingData = await Listing.findOne({
            include: [{ model: User, attributes: ['name'] }],
            where: {
                id: req.params.id,
            },
        });
        if (!listingData) {
            res.status(404).json({ message: 'No listing with that ID found!' });
            return;
        }
        res.status(200).json(listingData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new Lisitng
router.post('/', async (req, res) => {
    try {
        const nameS = req.body.name;
        const descriptionS = req.body.description;
        const priceS = req.body.price;
        const category_idS = req.body.category_id;
        const image_urlS = req.body.image_url; 

        const nameX = xss(nameS, {
            whiteList: {},
            stripIgnoreTag: true,
            stripIgnoreTagBody: ["script"],
        });

        const descriptionX = xss(descriptionS, {
            whiteList: {},
            stripIgnoreTag: true,
            stripIgnoreTagBody: ["script"],
        });

        const priceX = xss(priceS, {
            whiteList: {},
            stripIgnoreTag: true,
            stripIgnoreTagBody: ["script"],
        });

        const category_idX = xss(category_idS, {
            whiteList: {},
            stripIgnoreTag: true,
            stripIgnoreTagBody: ["script"],
        });

        const image_urlX = xss(image_urlS, {
            whiteList: {},
            stripIgnoreTag: true,
            stripIgnoreTagBody: ["script"],
        });

        const newListing = await Listing.create({
            name: nameX,
            description: descriptionX,
            price: priceX,
            category_id: category_idX,
            image_url: image_urlX,
            user_id: req.session.user_id,
        });
        res.status(200).json(newListing);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE a listing
router.put('/:id', async (req, res) => {
    try {
        const listingData = await Listing.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!listingData[0]) {
            res.status(404).json({ message: "No listing with that ID found!" });
            return;
        }
        res.status(200).json(listingData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE a Listing
router.delete('/:id', async (req, res) => {
    try {
        const userData = await Listing.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!userData) {
            res.status(404).json({ message: 'No listing with this id!' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});