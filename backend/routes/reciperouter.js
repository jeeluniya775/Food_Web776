const express = require("express");
const isLogin = require("../middlewares/islogin");
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/create", isLogin, upload.single("image"), createRecipe);
router.get("/allrecipe", getAllRecipes);
router.get("/:id", getRecipeById);
router.put("/:id", isLogin, updateRecipe); // Protect update route
router.delete("/:id", isLogin, deleteRecipe); // Protect delete route

module.exports = router;
