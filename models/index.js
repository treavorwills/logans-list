const Favorite = require('./Favorite');
const Listing = require('./Listing');
const User = require('./User');
const Category = require('./Category')

User.hasMany(Listing);

User.hasMany(Favorite);

Listing.hasOne(User);

Category.hasMany(Listing);

Listing.belongsTo(Category);

Favorite.hasOne(Listing);

Favorite.hasMany(User);



module.exports = {Listing, User, Favorite, Category};