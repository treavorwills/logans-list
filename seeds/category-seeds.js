
const { Category } = require('../models');

const categoryData = [
    {
        name: 'Lamps',
    },
    {
        name: 'Live Animals',
    },
    {
        name: 'Ladders',
    },
    {
        name: 'Locomotives',
    },
    {
        name: 'Locks',
    },
    {
        name: 'Land',
    },
    {
        name: 'Lemonade',
    },
    {
        name: 'Lipstick',
    },
    {
        name: 'Laser Pointers',
    },
];

const seedCategory = () => Category.bulkCreate(categoryData); 

module.exports = seedCategory;