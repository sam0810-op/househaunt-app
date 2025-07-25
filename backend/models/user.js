const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  userType: String, // 'owner' or 'renter'
});

module.exports = mongoose.model('User', userSchema);
