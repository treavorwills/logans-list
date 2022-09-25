const router = require('express').Router();

const listingRoutes = require('./listingRoutes');
const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const categoryRoutes = require('./categoryRoutes');
const uploadRoutes = require('./uploadRoutes');

router.use('/category', categoryRoutes)
router.use('/listing', listingRoutes);
router.use('/user', userRoutes);
router.use('/favorite', favoriteRoutes);
router.use('/upload', uploadRoutes);


module.exports = router;