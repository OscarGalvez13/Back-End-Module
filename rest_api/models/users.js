const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  firstName: {
    type: String,
    require: false,
    trim: true,
    maxlength: 20,
    minlength: 1,
  },
  lastName: {
    type: String,
    require: false,
    trim: true,
    maxlength: 20,
    minlength: 1,
  },
  username: {
    type: String,
    require: false,
    trim: true,
    maxlength: 50,
    minlength: 1,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = {
  model: mongoose.model("User", schema),
  schema,
};
