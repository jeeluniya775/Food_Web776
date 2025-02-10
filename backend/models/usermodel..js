const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  password: String,
  age: Number,
});

module.exports = mongoose.model("UserProfile", userSchema);
