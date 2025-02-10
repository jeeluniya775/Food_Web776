import React from "react";
import H_Header from "../components/H_Header";
import Logo_Header from "../components/Logo_Header";
import Header from "../components/Header";
// import Test from "./components/test";
import Categories_one_cricle from "../components/ Categories_one_cricle";

import Categories from "../components/Categories";
import Square from "../components/Square";
import Super_Delicious from "../parts/Super_Delicious";
import Email from "../parts/email";
import Fotter from "../parts/Fotter";

const Home = () => {
  return (
    <>
      <H_Header />
      <Logo_Header />
      <Header />
      <Categories />
      <Super_Delicious />
      <Email />
      <Fotter /> 
    </>
  );
};

export default Home;
