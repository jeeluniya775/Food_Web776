import React from "react";

const Email = () => {
  return (
    <>
      <div className="containerr">
        <h1 className="titlee">Deliciousness to your inbox</h1>
        <p className="subtitle">
          Enjoy weekly hand picked recipes and recommendations
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Email Address"
            className="email-input"
            required
          />
          <button type="submit" className="join-button">
            JOIN
          </button>
        </form>
        <p className="terms">
          By joining our newsletter you agree to our
          <a href="#"> Terms and Conditions</a>
        </p>
      </div>
    </>
  );
};

export default Email;
