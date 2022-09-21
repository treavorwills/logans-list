const router = require('express').Router();

const listingRoutes = require('./listingRoutes');
const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');


router.use('/listing', listingRoutes);
router.use('/user', userRoutes);
// router.use('/favorite', favoriteRoutes);


module.exports = router;