const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      email: user.email,
      id: user._id, // Use _id instead of id
    },
    "heyhey",
    { expiresIn: "7d" } // Optional: Set expiration time
  );
};

module.exports = generateToken;
