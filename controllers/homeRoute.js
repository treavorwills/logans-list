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

        res.render('singleListing', {
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
            attributes: { exclude: ['password'] }
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
let category = 0;
router.get('/categories/:id', async (req, res) => {
    switch (req.params.id) {
        case 'lamps':
            category = 1;
            break;
        case 'live-animals':
            category = 2;
            break;
        case 'ladders':
            category = 3;
            break;
        case 'locomotives':
            category = 4;
            break;
        case 'locks':
            category = 5;
            break;
        case 'land':
            category = 6;
            break;
        case 'lemonade':
            category = 7;
            break;
        case 'lipstick':
            category = 8;
            break;
        case 'laser-pointers':
            category = 9;
            break;
        default: category = '';
    }
    try {
        const listingData = await Listing.findAll({
            include: [{ model: User, attributes: ['name'] }],
            where: {
                categoryId: category,
            }
        });
        const listings = listingData.map((listing) => listing.get({ plain: true }));
        if (listings.length != 0) {
            res.render('./partials/listings', {
                listings,
                logged_in: req.session.logged_in
            })
        }
        else {
            res.render('./partials/noListings', {
                listings,
                logged_in: req.session.logged_in
            })
        }
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

//Signup route
router.get('/signup', (req, res) => {
    res.render('adduser');
});

// Add listing route
router.get('/add', (req, res) => {
    res.render('addlisting');
});



module.exports = router;
