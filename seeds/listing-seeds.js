// id name description price photo seller_id

const { Listing } = require('../models');

const listingData = [
    {
        name: 'Nicolas Cage Bedroom Lamp',
        description: 'soft, warm glow',
        price: 46,
        image_url: 'https://www.placecage.com/g/400/400',
        seller_id: 1,
        category_id: 1,
    },
    {
        name: 'Special Needs Racoon',
        description: 'this is the friendliest little guy you\'ll meet and was an excellent addition to our family during qurantine but we no longer have time to take care of him. $50 to a good home, $65 to a bad one.',
        price: 60,
        image_url: 'https://people.com/thmb/Zn7nGkCcktUPpaBKmZkXNQY61Y0=/1920x1080/filters:fill(auto,1)/screen-shot-2019-08-13-at-11.44.23-am-cb292dcf43be431abd4d70519220a990.jpg',
        seller_id: 1,
        category_id: 2,
    },
    {
        name: 'Cat',
        description: 'this is a cat',
        price: 45,
        image_url: 'https://media.vanityfair.com/photos/5e27310def889c00087c7928/master/pass/taylor-swift-cats.jpg',
        seller_id: 2,
        category_id: 2,
    },
    {
        name: 'Stool',
        description: 'not my real stool, but my step stool. For cool cats!',
        price: 123,
        image_url: 'https://cdn.pixabay.com/photo/2016/12/07/14/35/stool-1889581_960_720.jpg',
        seller_id: 3,
        category_id: 3,
    },
    {
        name: 'Thomas the train',
        description: 'you know who he his',
        price: 548,
        image_url: 'https://fh-sites.imgix.net/sites/4062/2021/03/10174822/thomas.jpg?auto=compress%2Cformat&w=700&h=700&fit=max',
        seller_id: 3,
        category_id: 4,
    },
    {
        name: 'Heber Railroad Replica',
        description: 'this is rad. Bought it for my son but he doesn\'t use it anymore',
        price: 11,
        image_url: 'https://wehco.media.clients.ellingtoncms.com/img/photos/2013/12/27/ADG_6052_web.jpg',
        seller_id: 2,
        category_id: 4,
    },
    {
        name: 'Leg Lamp',
        description: 'From Christmas Story - collectible',
        price: 445,
        image_url: 'https://cdn.shopify.com/s/files/1/0189/9572/products/6144275520_e157afaaaf_b.jpg?v=1575070877&width=1445',
        seller_id: 4,
        category_id: 1,
    },
    {
        name: 'Lamp Bizkit',
        description: 'Fred Durst signed this but the signature might be counterfiet',
        price: 17.55,
        image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/20/4d/63/another-lovely-broken.jpg',
        seller_id: 5,
        category_id: 1,
    },
    {
        name: 'Iguana',
        description: 'Reptile, good pet',
        price: 88,
        image_url: 'https://www.outdoorlife.com/uploads/2022/02/24/273994447_5372442669450468_7433445092771503230_n.png?auto=webp',
        seller_id: 6,
        category_id: 2,
    },
    {
        name: 'Arabian Lamp',
        description: 'Bought this while traveling',
        price: 313,
        image_url: 'https://i.ebayimg.com/images/g/JIgAAOxycmBS9OVX/s-l1600.jpg',
        seller_id: 7,
        category_id: 1,
    },
];

const seedListings = () => Listing.bulkCreate(listingData);

module.exports = seedListings;