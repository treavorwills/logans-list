// paths linking to the sepcific seed files
const seedListings = require('./listing-seeds.js');
// const seedUsers = require('./user-seeds');
// const seedFavorites = require('./favorite-seeds');


// require sequelize
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedListings();
    console.log('\n----- LISTINGS SEEDED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedFavorites();
    console.log('\n----- FAVORITES SEEDED -----\n');

    process.exit(0);
};

seedAll();