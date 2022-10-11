
const { User } = require('../models');

const userData = [
    {
        name: 'Nicolas Cage',
        email: 'nicolascage@gmail.com',
        password: 'nicolascage'
    },
    {
        name: 'Jim Jones',
        email: 'jimjones@gmail.com',
        password: 'jimjones',
    },
    {
        name: 'Steve Miller',
        email: 'stevemiller@gmail.com',
        password: 'stevemiller',
    },
    {
        name: 'Bill Smith',
        email: 'billsmith@gmail.com',
        password: 'billsmith',
    },
    {
        name: 'Logan Lester',
        email: 'loganlester@gmail.com',
        password: 'loganlester',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;