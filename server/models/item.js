var mongoose = require("mongoose");

var itemSchema = mongoose.Schema({
  food: {type: String},
  price: {type: Number},
  retrieved: { type: Boolean, default: false }
});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;
