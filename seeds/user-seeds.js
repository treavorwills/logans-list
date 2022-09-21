
const { User } = require('../models');

const userData = [
    {
        name: 'Nicolas Cage',
        email: 'ghostRider@gmail.com',
        password: 'declarationOfIndependence',
    },
];

const seedUsers = () => User.bulkCreate(userData); 

module.exports = seedUsers;