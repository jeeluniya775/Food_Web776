const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    preparationTime: { type: Number, required: true },
    servings: { type: Number, required: true },
    ingredients: { type: [String], required: true },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
