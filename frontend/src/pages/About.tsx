import React from "react";
import Main_header from "../components/Main_header";
import Fotter from "../parts/Fotter";

const About = () => {
  return (
    <>
      <Main_header />

      <div className="container">
        <h2 className="about-title">About</h2>
        <div className="were">
          <h1 className="about-heading">
            We’re a group of foodies who love <br />
            cooking and the internet
          </h1>
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/181127105254-08-50-sweets-travel-donuts.jpg?q=w_1110,c_fill"
            alt="Delicious dessert"
            className="about-image"
          />
          <p className="about-text">
            Food qualities braise chicken cuts bowl through slices butternut
            snack. Tender meat juicy sinners. One-pot low heat plenty of time
            adobo fat raw soften fruit. Sweet renders bone-in marrow richness
            kitchen, fricassee basted pork shoulder delicious butternut squash
            hunk.
          </p>
        </div>
        <div className="simple">
          <div className="simple_div">
            <h1 className="simple-heading">
              Simple, Easy <br />
              Recipes for All
            </h1>
            <p className="simple-text">
              Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy
              sauce burgers brisket. Polenta mustard hunk greens. Wine technique
              snack skewers chuck excess. Oil heat slowly. Slices natural
              delicious, set aside magic tbsp skillet, bay leaves brown
              centerpiece.
            </p>
          </div>
          <div className="simple_img">
            <img
              src="https://www.eatingwell.com/thmb/ZQrLhPC_RxCEhJwAHhayjBHXDV8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7010038_CL_Bowls_ingredients_049-cf9ba6805e5f4c1593044106bec217d7.jpg"
              alt="Delicious ingredients"
            />
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
};

export default About;
