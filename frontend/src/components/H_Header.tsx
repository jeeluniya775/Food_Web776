import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const H_Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="h_header navbar">
        <div className="logo">
          <img src="/assets/img/ins.jpg" alt="Instagram" />
          <img src="/assets/img/fac.png" alt="Facebook" />
        </div>
        <form className=" search d-flex align-items-center">
          <div className="input-group me-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
            />
            <button className=" btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </form>
        <button
          className=" login btn btn-primary"
          type="button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </nav>
    </>
  );
};

export default H_Header;
