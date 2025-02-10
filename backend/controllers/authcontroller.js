const userModel = require("../models/usermodel.");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = require("../utils/genratetoken");
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

module.exports.loginUser = async function (req, res) {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email: email });
  if (!user) {
    res.send("Email or password is wrong");
  }

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      const token = generateToken(user);
      res.cookie("token", token, {
        maxAge: 900000, // Cookie expiry time in milliseconds
        httpOnly: true, // Makes the cookie inaccessible to JavaScript's Document.cookie API
        secure: true, // Ensures the cookie is only sent over HTTPS
      });
      res.send("You can login");
    } else {
      res.send("Email or password is wrong");

      [];
    }
  });
};
