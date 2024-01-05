import React from "react";
import "./Navbar.css";
import profile from "../../Assets/images/profile.jpg";

const Navbar = () => {
  return (
    <>
      <div className="nav-left">
        <div className="brand_name">Video Performance</div>
      </div>
      <div className="nav-right">
        <div className="searchBar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Quick search" />
        </div>
        |
        <div className="message_icon">
          <i class="fa-solid fa-message"></i>
        </div>
        |
        <div className="bell_icon">
          <i class="fa-regular fa-bell"></i>
        </div>
        |
        <div className="profiles_section">
          <div className="profile_image">
            <img src={profile} alt="profile" />
          </div>
          <div className="Profile_name">{`AR Shakir`}</div>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
