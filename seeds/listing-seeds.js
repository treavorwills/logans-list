// id name description price photo seller_id

const { Listing } = require('../models');

const listingData = [
    {
        name: 'Nicolas Cage Bedroom Lamp',
        description: 'soft, warm glow',
        price: 46,
        photo: 'https://www.placecage.com/200/300',
        seller_id: 1,
        category_id: 1,
    },
    {
        name: 'Special Needs Racoon',
        description: 'this is the friendliest little guy you\'ll meet and was an excellent addition to our family during qurantine but we no longer have time to take care of him. $50 to a good home, $65 to a bad one.',
        price: 60,
        photo: ' ',
        seller_id: 1,
        category_id: 2,
    },
    {
        name: 'Cat',
        description: 'this is a cat',
        price: 45,
        photo: ' ',
        seller_id: 2,
        category_id: 2,
    },
    {
        name: 'Stool',
        description: 'not my real stool, but my step stool',
        price: 123,
        photo: ' ',
        seller_id: 3,
        category_id: 3,
    },
    {
        name: 'Thomas the train',
        description: 'you know who he his',
        price: 548,
        photo: ' ',
        seller_id: 3,
        category_id: 4,
    },
    {
        name: 'Heber Railroad Replica',
        description: 'this is rad. Bought it for my son but he doesn\'t use it anymore',
        price: 11,
        photo: ' ',
        seller_id: 2,
        category_id: 4,
    },
    {
        name: 'Leg Lamp',
        description: 'From Christmas Story - collectible',
        price: 445,
        photo: ' ',
        seller_id: 4,
        category_id: 1,
    },
    {
        name: 'Lamp Bizkit',
        description: 'Fred Durst signed this but the signature might be counterfiet',
        price: 17.55,
        photo: ' ',
        seller_id: 5,
        category_id: 1,
    },
    {
        name: 'Iguana',
        description: 'Reptile, good pet',
        price: 88,
        photo: ' ',
        seller_id: 6,
        category_id: 2,
    },
    {
        name: 'Arabian Lamp',
        description: 'Bought this while traveling',
        price: 313,
        photo: ' ',
        seller_id: 7,
        category_id: 1,
    },
];

const seedListings = () => seedListings.bulkCreate(listingData);

module.exports = seedListings;