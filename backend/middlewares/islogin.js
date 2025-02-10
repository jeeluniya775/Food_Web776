const jsonwebtoken = require("jsonwebtoken");

const secret = "$jeelpatel"; // Use environment variable

const isLogin = async (req, res, next) => {
  try {
    const auth = req.cookies.token;
    if (!auth) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Please log in first." });
    }

    const decoded = jsonwebtoken.verify(auth, secret);
    req.user = decoded; // Attach user info to request

    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Session expired. Please log in again." });
  }
};

module.exports = isLogin;

