const router = require('express').Router();
const { Listing, User, Category } = require('../models')
const withAuth = require('../utils/auth');

//Render the homepage with listings
router.get('/', async (req, res) => {
        const listingData = await Listing.findAll({
            include: [{ model: User, attributes: ['name'] }]
        });
        const listings = listingData.map((listing) => listing.get({ plain: true }));

        // res.render('homepage', {
        //     listings,
        //     logged_in: req.session.logged_in
        // });
        res.render('./partials/listings', {
            listings,
            logged_in: req.session.logged_in
        });
});

//Render page for the listing you choose 
router.get('/listing/:id', async (req, res) => {
    try {
        const listingData = await Listing.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['name'] }]
        });
        const listing = listingData.get({ plain: true })

        res.render('listing', {
            ...listing,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

//Render the profile page with listings
router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Listing }],
        });
        const user = userData.get({ plain: true });

        res.render('userprofile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Render categories page with relevent listings 
router.get('/categories/:id', async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            include: [{ model: Listing }]
        });
        const categories = categoryData.map((categories) => categories.get({ plain: true }));

        res.render('categories', {
            categories,
            logged_in: req.session.logged_in
        })
        res.status(200).json(categoryData)
    } catch (err) {
        res.status(500).json(err);
    }
});

//redirect login from withAuth if theyre not logged in 
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

router.get('/add', (req, res) => {
    res.render('addlisting');
});

module.exports = router;
