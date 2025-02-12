import React, { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage(data.error || "Subscription failed. Try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="containerr">
      <h1 className="titlee">Deliciousness to your inbox</h1>
      <p className="subtitle">
        Enjoy weekly hand-picked recipes and recommendations
      </p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="join-button">
          JOIN
        </button>
      </form>
      {message && <p className="message">{message}</p>}
      <p className="terms">
        By joining our newsletter you agree to our
        <a href="#"> Terms and Conditions</a>
      </p>
    </div>
  );
};

export default Email;
