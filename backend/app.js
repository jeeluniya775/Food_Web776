const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database.js");
const cors = require("cors");
const recipeRoutes = require("./routes/reciperouter");
const path = require("path");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Allow requests fr
// om frontend
app.use(cors());

const userrouter = require("./routes/userrouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userrouter);
app.use("/recipes", recipeRoutes);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
