const express = require("express");

const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/create", upload.single("image"), createRecipe);
router.get("/allrecipe", getAllRecipes);
router.get("/:id", getRecipeById);
router.put("/:id", updateRecipe); // Protect update route
router.delete("/:id", deleteRecipe); // Protect delete route

module.exports = router;
