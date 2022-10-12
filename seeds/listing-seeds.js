// id name description price photo user_id

const { Listing } = require('../models');

const listingData = [
    {
        name: 'Bedroom Lamp',
        description: 'soft, warm glow',
        price: 46,
        image_url: 'https://target.scene7.com/is/image/Target/Table-Lamp-211216-1639674920165',
        user_id: 1,
        category_id: 1,
    },
    {
        name: 'Baby geckos ',
        description: 'By pet Leoprad gecko just had a handful of babies, were looking for homes for them all.',
        price: 60,
        image_url: 'https://reptilesmagazine.com/wp-content/uploads/data-import/094fff37/breed-leo-rt1-500.jpg',
        user_id: 2,
        category_id: 2,
    },
    {
        name: 'Calico cat',
        description: 'this is daisy our 3yr old calico, unfortunately my wife turned out to be extremly allergic so were looking for a loving home for her.',
        price: 75,
        image_url: 'https://www.thesprucepets.com/thmb/U1KumuYMjo5ghwwzwDiDQijNjwU=/2473x1855/smart/filters:no_upscale()/calico-cats-profile-554694-hero-c7ba9806ce1f4fb1b4d4edc2fd820a0d.jpg',
        user_id: 3,
        category_id: 2,
    },
    {
        name: 'Bar Stool',
        description: 'Wood stool for your home bar or island',
        price: 75,
        image_url: 'https://secure.img1-cg.wfcdn.com/im/75378392/resize-h600-w600%5Ecompr-r85/1141/114110957/Hawkins+Bar+%26+Counter+Stool+%28Set+of+2%29.jpg',
        user_id: 3,
        category_id: 3,
    },
    {
        name: 'Thomas the train',
        description: 'my son out grew his train set',
        price: 40,
        image_url: 'https://m.media-amazon.com/images/I/61YzA3fyQRL.jpg',
        user_id: 3,
        category_id: 4,
    },
    {
        name: 'Heber Railroad Replica',
        description: 'im moving out of country and am looking to give my replica train model away',
        price: 300,
        image_url: 'https://morrismuseum.org/wp-content/uploads/2022/05/Trains-Morris-Museum.jpg',
        user_id: 4,
        category_id: 4,
    },
    {
        name: 'Leg Lamp',
        description: 'From Christmas Story - collectible',
        price: 445,
        image_url: 'https://cdn.shopify.com/s/files/1/0189/9572/products/6144275520_e157afaaaf_b.jpg?v=1575070877&width=1445',
        user_id: 5,
        category_id: 1,
    },
    {
        name: 'Livinf Room Lamp ',
        description: 'A lamp for your living room',
        price: 17.55,
        image_url: 'https://i5.walmartimages.com/asr/c053becb-b2b7-48af-bbb6-914e62cc6020_1.c90fc04f16715824061b471e31f632e8.jpeg',
        user_id: 5,
        category_id: 1,
    },
    {
        name: 'Iguana',
        description: 'Reptile, good pet',
        price: 88,
        image_url: 'https://www.outdoorlife.com/uploads/2022/02/24/273994447_5372442669450468_7433445092771503230_n.png?auto=webp',
        user_id: 2,
        category_id: 2,
    },
    {
        name: 'Arabian Lamp',
        description: 'Bought this while traveling',
        price: 313,
        image_url: 'https://i.ebayimg.com/images/g/JIgAAOxycmBS9OVX/s-l1600.jpg',
        user_id: 1,
        category_id: 1,
    },
];

const seedListings = () => Listing.bulkCreate(listingData);

module.exports = seedListings;