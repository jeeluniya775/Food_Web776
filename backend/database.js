const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/FoodWeb")
  .then(function () {
    console.log("connected");
  })
  .catch(function (err) {
    console.log(err);
  });

module.exports = mongoose.connection;
