const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database.js");
const cors = require("cors");
const recipeRoutes = require("./routes/reciperouter");
const path = require("path");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests only from your frontend
    credentials: true, // Allow cookies and authentication headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
  })
);

// Allow requests fr
// om frontend

const userrouter = require("./routes/userrouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userrouter);
app.use("/recipes", recipeRoutes);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
