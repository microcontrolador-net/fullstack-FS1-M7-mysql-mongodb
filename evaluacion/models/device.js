const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  name: String,
  brand: String,
  type: String,
  price: Number
}, {
  versionKey: false,
  collection: 'devices'
});

module.exports = mongoose.model('Device', deviceSchema);
