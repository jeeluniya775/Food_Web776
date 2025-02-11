import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Square from "../components/Square";

// Define the type for a recipe
interface Recipe {
  _id: string;
  title: string;
  author: string;
  image: string;
  date: string;
}

const Super_Delicious: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5001/recipes/allrecipe");
        const data: Recipe[] = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleNavigation = () => {
    console.log("Navigating to /recipes");
    navigate("/Recipe");
  };

  return (
    <>
      <h3 style={{ paddingLeft: "90px" }}>Latest Recipes</h3>

      <div className="super_delicious">
        {recipes.map((recipe) => (
          <Square key={recipe._id} recipe={recipe} />
        ))}
      </div>

      <div className="super_btn">
        <button
          onClick={handleNavigation}
          type="button"
          className="btn btn-dark"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default Super_Delicious;
