const Recipe = require("../models/recipe");

exports.createRecipe = async (req, res) => {
  try {
    const {
      name,
      description,
      author,
      category,
      preparationTime,
      servings,
      ingredients,
    } = req.body;

    // Basic validation
    if (
      !name ||
      !description ||
      !author ||
      !category ||
      !preparationTime ||
      !servings ||
      !ingredients
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const image = req.file ? req.file.filename : ""; // Store only filename

    const recipe = new Recipe({
      name,
      description,
      author,
      category,
      preparationTime,
      servings,
      ingredients,
      image,
    });

    const savedRecipe = await recipe.save();
    res
      .status(201)
      .json({ message: "Recipe created successfully", recipe: savedRecipe });
  } catch (error) {
    console.error("Error creating recipe:", error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();

    // Convert image filename to full URL
    const updatedRecipes = recipes.map((recipe) => ({
      ...recipe._doc,
      image: recipe.image
        ? `http://localhost:5001/uploads/${recipe.image}`
        : "https://via.placeholder.com/150", // Fallback image
    }));

    res.status(200).json(updatedRecipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    res.json({
      ...recipe._doc,
      image: recipe.image
        ? `http://localhost:5001/uploads/${recipe.image}`
        : "https://via.placeholder.com/150",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//categoriescategoriescategoriescategoriescategoriescategoriescategoriescategoriescategoriescategoriescategories
