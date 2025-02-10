import React from "react";
import Header from "../components/Header";
import Main_header from "../components/Main_header";
import Super_Delicious from "../parts/Super_Delicious";
import Fotter from "../parts/Fotter";

const Recipe_page = () => {
  return (
    <>
      <Main_header />
      <div className="super-delicious-container">
        <Super_Delicious />
      </div>
      <Fotter />
    </>
  );
};

export default Recipe_page;
