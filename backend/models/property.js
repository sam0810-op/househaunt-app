const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  address: String,
  description: String,
  cost: String,
  contact: String,
});

module.exports = mongoose.model('Property', propertySchema);
