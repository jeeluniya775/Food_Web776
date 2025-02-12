const jwt = require("jsonwebtoken");
const userModel = require("../models/usermodel.");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.token; // Read token from cookies
    if (!token) {
      return res.status(401).json({ error: "Unauthorized, no token provided" });
    }

    const decoded = jwt.verify(token, "secretKey");
    if (!decoded || !decoded.id) {
      return res.status(401).json({ error: "Invalid token data" });
    }

    // Fetch user from DB and attach to request
    req.user = await userModel.findById(decoded.id).select("-password");
    if (!req.user) {
      return res.status(401).json({ error: "User not found" });
    }

    next(); // Move to the next middleware
  } catch (error) {
    console.error("❌ Authentication Error:", error);
    return res.status(401).json({ error: "Invalid token or expired session" });
  }
};

module.exports = authenticate;
