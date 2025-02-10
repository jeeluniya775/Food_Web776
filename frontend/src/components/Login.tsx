import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface UserData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState<UserData>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/user/login", {
        method: "POST",
        credentials: "include", // Ensures cookies are sent with requests
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });

      const data = await response.text();
      if (response.ok) {
        alert("Login successful");
        navigate("/"); // Redirect after login
      } else {
        alert(data);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
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
