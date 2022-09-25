const router = require('express').Router();
const { Listing, User } = require('../../models');

module.exports = router;

// GET all listings
router.get('/', async (req,res) => {
        const listingData = await Listing.findAll().catch((err) => {
            res.json(err);
        });
        // const listings = listingData.map((listing) => listing.get({ plain: true }));
        // res.render('all', { listings });
        res.json(listingData);
});

// GET a single listing
router.get('/:id', async (req,res) => {
    try {
        const listingData = await Listing.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!listingData){
            res.status(404).json({message: 'No listing with that ID found!'});
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
        const newListing = await Listing.create(req.body);
        res.status(200).json(newListing);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE a listing
router.put('/:id', async (req,res) => {
    try {
        const listingData = await Listing.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!listingData[0]) {
            res.status(404).json({ message: "No listing with that ID found!"});
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