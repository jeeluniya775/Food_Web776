import React, { useEffect, useState } from "react";
import Main_header from "../components/Main_header";
import Fotter from "../parts/Fotter";

const Profilepage = () => {
  const [profile, setProfile] = useState(null);

useEffect(() => {
  const fetchProfile = async () => {
    try {
      const response = await fetch("http://localhost:5001/user/profile", {
        credentials: "include", // Ensure cookies are sent
      });

      console.log("🔍 Response Status:", response.status); // Log status code
      const data = await response.json();
      console.log("🔍 Profile Data:", data); // Log response data

      setProfile(data);
    } catch (error) {
      console.error("❌ Error fetching profile:", error);
    }
  };

  fetchProfile();
}, []);


  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Main_header />
      <h1 className="profileh1">Profile</h1>
      <div>
        <div className="profile_div">
          <img
            src={
              profile.profileImage ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWX3ukDq0WGD12qlTzZuoM21blxeCRCrhi5ng_BP568fBg3EZSzskjpIgDhn95Id7_Es&usqp=CAU"
            }
            className="profile_img"
          />
        </div>

        <div className="lab_val">
          <div className="lab_inp">
            <label>Full Name</label>
            <input
              type="text"
              value={`${profile.firstname} ${profile.lastname}`}
              readOnly
            />
          </div>
          <div className="lab_inp">
            <label>Email</label>
            <input type="text" value={profile.email} readOnly />
          </div>
          <div className="lab_inp">
            <label>Age</label>
            <input type="text" value={profile.age} readOnly />
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
};

export default Profilepage;
