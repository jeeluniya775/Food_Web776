import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [userdata, setuserdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });

      const result = await response.json();
      console.log(result);

      setuserdata({
        firstname: "",
        lastname: "",
        email: "",
        age: "",
        password: "",
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="reg-text">Registration</h1>

        <form className="registaion-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">First-Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={userdata.firstname}
              onChange={handleChange}
              className="form-input"
              required
            />
            <label className="form-label">Last-Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={userdata.lastname}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userdata.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={userdata.age}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userdata.password}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="btn btn-success sucess mb-3">
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="btn btn-primary sucess"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
