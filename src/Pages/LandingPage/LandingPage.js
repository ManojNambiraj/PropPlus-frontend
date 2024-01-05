import React from "react";
import "./LandingPage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import LeftSection from "../../components/LeftSection/LeftSection";
import Section_left_bottom from "../../components/LeftSection/Section_left_bottom";


const LandingPage = () => {
  return (
    <div className="landing_container">
      <div className="sidebar_container">
        <Sidebar />
      </div>
      <div className="content_page">
        <div className="navbar_container">
          <Navbar />
        </div>
        <div className="section_content">
          <div className="section_left">
            <LeftSection />
            <div className="section_left_bottom">
              <Section_left_bottom />
            </div>
          </div>
          <div className="section_right">section_right</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
