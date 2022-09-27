const router = require('express').Router();

const listingRoutes = require('./listingRoutes');
const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/category', categoryRoutes)
router.use('/listing', listingRoutes);
router.use('/user', userRoutes);
router.use('/favorite', favoriteRoutes);

module.exports = router;