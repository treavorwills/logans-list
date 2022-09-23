const router = require('express').Router();
const { Listing, User } = require('../models')

router.get('/', async (req, res) => {
    try {
        const listingData = await Listing.findAll({
            include: [{model: User, attributes: ['name']}]
        });
        const listings = listingData.map((listing) => listing.get({plain: true}));

        res.render('homepage', {
            listings,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;
