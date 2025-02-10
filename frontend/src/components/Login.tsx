import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userdata, setuserdata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });

      const result = await response.json();
      console.log(result);

      setuserdata({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <button className="close-button" onClick={handleClose}>
          ✖
        </button>
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              name="email"
              value={userdata.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              name="password"
              value={userdata.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate("/registration")}
            className="register-button"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
