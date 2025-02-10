import React from "react";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <>
      <header className="header">
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/recipe">Recipe</Link>
          <div className="dropdown">
            <Link to="#" className="dropdown-toggle">
              Pages ▼
            </Link>
            <div className="dropdown-menu">
              <Link to="/category">Category</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </header>
    </>
  );
};

export default Test;
