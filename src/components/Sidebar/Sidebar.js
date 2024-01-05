import React from "react";
import "./Sidebar.css";
import logo from "../../Assets/images/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar_contents">
      <div className="siderbar_top_section">
        <div className="logo_div">
          <img src={logo} alt="logo" />
        </div>
        <div className="sidebar_navLinks">
          <a href="/">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/">
            <i class="fa-solid fa-house"></i>
          </a>
          <a href="/">
            <i class="fa-solid fa-house"></i>
          </a>
        </div>
      </div>
      <div className="power_button">
        <a href="/">
          <i class="fa-solid fa-power-off"></i>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
