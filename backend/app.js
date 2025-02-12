const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database.js");
const cors = require("cors");
const recipeRoutes = require("./routes/reciperouter");
const path = require("path");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser());

app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Adjust port as needed

// Allow requests fr
// om frontend

const userrouter = require("./routes/userrouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userrouter);
app.use("/recipes", recipeRoutes);

const sendemail = (req, res) => {
  const otp = Math.floor(1 + Math.random() * 9000);
  console.log(otp);
  const emailprovider = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: "jeelpatel1817@gmail.com",
      pass: "ucaz wxca fjfw rscy",
    },
    tls: { rejectUnauthorized: false },
  });

  const receiver = {
    from: "jeelpatel1817@gmail.com",
    to: "junjiya775@rku.ac.in",
    subject: "otp verification",
    text: `your one time password(otp) is ${otp}`,
    //text: { otp },
  };
  // princyp1712@gmail.com

  emailprovider.sendMail(receiver, (error, emailresponse) => {
    if (error) {
      res.status(200).json({ message: error });
    } else {
      res.status(200).json({ message: "otp send successfullly" });
    }
  });
};

app.route("/user/email").get(sendemail);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
