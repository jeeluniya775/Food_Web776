import React from "react";

// Define prop types for Square component
interface SquareProps {
  recipe: {
    _id: string;
    name: string;
    author: string;
    description: string; // Added description
    image?: string;
    createdAt: string; // Use createdAt as the live date
  };
}

const Square: React.FC<SquareProps> = ({ recipe }) => {
  console.log("Recipe Data:", recipe); // Debugging

  return (
    <div className="card">
      <img
        src={recipe.image || "https://via.placeholder.com/150"}
        alt={recipe.name}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <div className="card-content">
        <div className="title">{recipe.name}</div>
        <div className="author">
          <span>{recipe.author}</span>
        </div>
        <div className="description">
          <p>{recipe.description}</p> {/* Added description */}
        </div>
        <div className="meta">
          <span>
            Live date: {new Date(recipe.createdAt).toLocaleDateString("en-US")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Square;
