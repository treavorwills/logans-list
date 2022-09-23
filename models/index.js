const Favorite = require('./Favorite');
const Listing = require('./Listing');
const User = require('./User');
const Category = require('./Category')

User.hasMany(Favorite);

Listing.hasOne(User);

Favorite.hasOne(Listing);

Favorite.hasMany(User);

module.exports = {Listing, User, Favorite, Category};