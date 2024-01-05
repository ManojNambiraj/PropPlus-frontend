import React from "react";
import "./LeftSection.css";
import cardImg from "../../Assets/images/Signature_Debit_Card.jpg";

const LeftSection = () => {
  const cards_Arr = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="section_left_Top">
        <div className="recent_heading_section">
          <div className="headings">
            <div className="main_heading">Recent Videos</div>
            <div className="sub_heading">{`Last payment Sent 2 days ago`}</div>
          </div>
          <div className="search_icon_heading">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="recent_Section_cards">
          {cards_Arr.map((item, idx) => {
            return (
              <div className="video_card">
                <div className="card_imgs">
                  <img src={cardImg} alt="video_tag" />
                </div>
                <div className="card_headings">
                  <div className="card_main_heading">Part 2 - Navigation</div>
                  <div className="card_sub_title">188 views - 12 comments</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default LeftSection;
