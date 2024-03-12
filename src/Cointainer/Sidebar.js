import React, { useState } from "react";
import "./Sidebar.css";
import image3 from "../Assets/Image/NEWS2FARMER.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [hidecatgeory, setHidecategory] = useState(false);
  const handleCategory = () => {
    setHidecategory((prevState) => !prevState);
  };
  return (
    <div className="sidebar_nav">
      <div className="heading">
        <div className="left_head">
          <div className="nav_image">
            <img src={image3} />
          </div>
          <p>Growers Goods</p>
        </div>
        <ul className="nav_links">
          <li className="nav_link">
            <Link to="/" className="link">
              <div className="sidebar_link">
                <i class="fa-solid fa-border-all"></i>
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="nav_link " onClick={handleCategory}>
            <div className="sidebar_link">
              <i class="fa-solid fa-list"></i>
              <span className="nav_link_cat">
                <span>Category</span>

                <i
                  class="fa-solid fa-caret-down"
                  style={{ transform: `rotate(${hidecatgeory ? 180 : 0}deg)` }}
                ></i>
              </span>
            </div>
          </li>

          <li
            className="category"
            style={{ display: `${hidecatgeory ? "flex" : "none"}` }}
          >
            <ul className="dropdown">
              <li className="cat">
                <Link to="/Veggies" className="link">
                  <div className="sidebar_link">
                    <i class="fa-solid"></i>
                    <span>Veggies</span>
                  </div>
                </Link>
              </li>
              <li className="cat">
                <Link to="/Seeds" className="link">
                  <div className="sidebar_link">
                    <i class="fa-solid"></i>
                    <span>Seeds</span>
                  </div>
                </Link>
              </li>
              <li className="cat">
                <Link to="/Fertilizer" className="link">
                  <div className="sidebar_link">
                    <i class="fa-solid"></i>
                    <span>Fertilizer</span>
                  </div>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav_link">
            <Link to="/Famers" className="link">
              <div className="sidebar_link">
                <i class="fa-brands fa-solid fa-product-hunt"></i>
                <span>Total Products</span>
              </div>
            </Link>
          </li>
          <li className="nav_link">
            <Link to="/Users" className="link">
              <div className="sidebar_link">
                <i class="fa-solid fa-user-tie"></i>
                <span>Users</span>
              </div>
            </Link>
          </li>
          <li className="nav_link">
            <Link to="/Orders" className="link">
              <div className="sidebar_link">
                <i class="fa-solid fa-store"></i>
                <span>Orders</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
