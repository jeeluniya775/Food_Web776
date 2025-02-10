import React from "react";
import Main_header from "../components/Main_header";
import Categories_one_cricle from "../components/ Categories_one_cricle";
import Categories_big from "../components/Categories_big";
import Fotter from "../parts/Fotter";

const Category = () => {
  return (
    <>
      <div className="main-header">
        <Main_header />
      </div>
      <div className="cat_text">
        <h3> categories </h3>
      </div>

      <div className="cat_big">
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
        <Categories_big />
      </div>

      <div className="fotterr">
        <Fotter />
      </div>
    </>
  );
};

export default Category;
