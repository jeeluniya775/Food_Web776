const userModel = require("../models/usermodel.");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.registerUser = async (req, res) => {
  try {
    let { firstname, lastname, email, age, password } = req.body;
    let user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "You already have an account." });
    }

    bcrypt.genSalt(10, async (err, salt) => {
      if (err) return res.status(500).json({ error: err.message });

      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.status(500).json({ error: err.message });

        try {
          user = await userModel.create({
            firstname,
            lastname,
            email,
            password: hash,
            age,
          });

          let token = generateToken(user);
          res.cookie("token", token);

          return res
            .status(201)
            .json({ message: "User created successfully", token });
        } catch (err) {
          return res.status(500).json({ error: err.message });
        }
      });
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

//login controller

function generateToken(user) {
  return jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1h" });
}

module.exports.loginUser = async function (req, res) {
  try {
    let { email, password } = req.body;

    // Check if user exists
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Email or password is wrong" });
    }

    // Compare password using async/await
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Email or password is wrong" });
    }

    // Generate token
    const token = generateToken(user);

    // Set cookie (use `secure: false` for localhost)
    res.cookie("token", token, {
      maxAge: 900000, // 15 minutes
      httpOnly: true, // Prevents JavaScript access
      secure: process.env.NODE_ENV === "production", // Only secure in production
      sameSite: "Strict", // Protects against CSRF
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("❌ Login Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getUserProfile = async function (req, res) {
  try {
    let userId = req.user.id; // Assuming authentication middleware sets req.user
    let user = await userModel.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
