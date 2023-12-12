const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String },
  imageUrl: { type: String }
});

module.exports = mongoose.model('product', productSchema);
