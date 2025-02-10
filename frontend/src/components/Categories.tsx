import React from "react";
import CategoriesCircleCard from "./ Categories_one_cricle";

const Categories = () => {
  return (
    <div className="circle_div">
      <h2 className="heading">Popular Categories</h2>
      <div className="Cat_circle">
        <CategoriesCircleCard />
        <CategoriesCircleCard />
        <CategoriesCircleCard />
        <CategoriesCircleCard />
        <CategoriesCircleCard />
        <CategoriesCircleCard />
      </div>
    </div>
  );
};

export default Categories;
