const Favorite = require('./Favorite');
const Listing = require('./Listing');
const User = require('./User');
const Category = require('./Category');
const Image = require('./Image');

User.hasMany(Favorite);

Listing.hasOne(User);

Favorite.hasOne(Listing);

Favorite.hasMany(User);

Category.hasMany(Listing);

module.exports = { Listing, User, Favorite, Category, Image };