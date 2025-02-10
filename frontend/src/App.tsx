import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Main_header from "./components/Main_header";
import Recipe_page from "./pages/Recipe_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Profile from "./pages/Profilepage";
import Category from "./pages/Category";
import About from "./pages/About";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Add from "./pages/Add";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Empty route (adjust as needed) */}
          <Route path="/" element={<Home />} />
          <Route path="/Recipe" element={<Recipe_page />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category" element={<Category />} />
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
