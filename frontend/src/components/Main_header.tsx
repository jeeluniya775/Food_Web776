import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Main_header.css"; // Import the CSS file

const Main_header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <h2
          className="brand-namee me-5"
          style={{
            color: "white", // Set text color to black
            fontFamily: '"Brush Script MT", cursive', // Use "Brush Script MT" font with fallback cursive
            fontWeight: "bold", // Make the font bold
            fontSize: "40px", // Set font size
            letterSpacing: "1px", // Add slight spacing between letters
          }}
        >
          Foodie
        </h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Recipe">
                Recipe
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Page
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/category">
                    Category
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
          <button
            onClick={() => navigate("/add")}
            className="btn btn-outline-secondary"
            type="button"
          >
            <i className="bi bi-plus-circle"></i> Add
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Main_header;
