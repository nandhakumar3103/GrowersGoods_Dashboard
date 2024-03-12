import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="top_bar">
      <div className="search_bar">
        <i class="fa-solid fa-magnifying-glass"></i>Search
      </div>
      <div className="notification">
        <i class="fa-regular fa-bell"></i>
      </div>
    </div>
  );
};

export default Topbar;
