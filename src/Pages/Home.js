import React from "react";
import "./Home.css";
import ReportCrads from "../Cointainer/ReportCards/ReportCrads";
import Areachart from "../Components/Charts/Areachart/Areachart";
import Over_all_Products from "../Components/Table/Overall_Products/Over_all_Products";

const Home = () => {
  return (
    <div className="home">
      <div className="section_top">
        <ReportCrads />
      </div>
      <div className="section_chart">
        <Areachart />
      </div>
      <div className="section_bottom">
        <Over_all_Products />
      </div>
    </div>
  );
};

export default Home;
