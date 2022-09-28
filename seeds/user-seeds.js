
const { User } = require('../models');

const userData = [
    {
        name: 'Nicolas Cage',
        email: 'ghostRider@gmail.com',
        password: 'declarationOfIndependence',
        profile_pic: 'https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;