import React from "react";
import Square from "../components/Square";

const Super_Delicious = () => {
  return (
    <>
      <h3 style={{ paddingLeft: "90px" }}>Latest Recipes</h3>

      <div className="super_delicious">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="super_btn">
        <button type="button" className="btn btn-dark">
          Load_More
        </button>
      </div>
    </>
  );
};

export default Super_Delicious;
