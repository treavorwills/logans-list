const Favorite = require('./Favorite');
const Listing = require('./Listing');
const User = require('./User');
const Category = require('./Category');

User.hasMany(Listing);

Listing.belongsTo(User, {
    foreignKey: 'user_id'
});

Category.hasMany(Listing);

module.exports = { Listing, User, Favorite, Category };