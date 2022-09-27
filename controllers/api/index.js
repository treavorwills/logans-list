const router = require('express').Router();

const listingRoutes = require('./listingRoutes');
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/category', categoryRoutes)
router.use('/listing', listingRoutes);
router.use('/user', userRoutes);


module.exports = router;