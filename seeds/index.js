// paths linking to the sepcific seed files
const seedListings = require('./listing-seeds.js');
const seedUsers = require('./user-seeds');


// require sequelize
const sequelize = require('../config/connection');
const seedCategory = require('./category-seeds.js');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedCategory();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedListings();
    console.log('\n----- LISTINGS SEEDED -----\n');
};

seedAll();