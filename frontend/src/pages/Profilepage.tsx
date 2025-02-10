import React from "react";
import Main_header from "../components/Main_header";
import Fotter from "../parts/Fotter";

const Profilepage = () => {
  return (
    <>
      <Main_header />

    <h1 className="profileh1">Profile</h1>
      <div>
        <div className="profile_div">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWX3ukDq0WGD12qlTzZuoM21blxeCRCrhi5ng_BP568fBg3EZSzskjpIgDhn95Id7_Es&usqp=CAU"
            className="profile_img"
          />
          <div className="cha-del">
            <button className=" btn btn-custom "> change photo</button>
            <button className=" btn btn-delete "> Delete</button>
          </div>
        </div>

        <div className="lab_val">
          <div className="lab_inp">
            <label>Full name</label>
            <input type="text" />
          </div>
          <div className="lab_inp">
            <label>Username</label>
            <input type="text" />
          </div>
          <div className="lab_inp">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="lab_inp">
            <label>Password</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
};

export default Profilepage;
