import React from "react";
import { Link } from "react-router-dom";

const Homecards = ({ cardTitle, cardValue, cardview, Report, image }) => {
  return (
    <div className="box">
      <div className="report_card">
        <div className="card_top">
          <div className="card_top_left">
            <img src={image} alt="image" />
          </div>
          <div className="card_top_right">
            <span className="cardTitle">{cardTitle}</span>
            <span className="quantity">{cardValue}</span>
          </div>
        </div>
        <div className="card_bottom">
          <Link id="card_bottom" to={`/${cardview}`}>
            View All<i class="fa-solid fa-chevron-right"></i>
          </Link>
          <div
            className="status_box"
            style={{ backgroundColor: "rgb(44 166 32 / 42%)" }}
          >
            <i class="fa-solid fa-arrow-trend-up"></i>
            <div className="report">{Report}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecards;
