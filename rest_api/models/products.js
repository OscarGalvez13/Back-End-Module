const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 20,
    minlenght: 1,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = {
  model: mongoose.model("Product", schema),
  schema,
};
