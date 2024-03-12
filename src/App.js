import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Cointainer/Sidebar";
import Topbar from "./Cointainer/Topbar/Topbar";
import Home from "./Pages/Home";
import Statistics from "./Pages/Statistics/Statistics";
import Famers from "./Pages/Farmers/Famers";
import Fertilizer from "./Pages/Fertilizer/Fertilizer";
import Veggies from "./Pages/Veggies/Veggies";
import Seeds from "./Pages/Seeds/Seeds";
import User from "./Pages/Users/User";
import Orders from "./Pages/Orders/Orders";

export const backendapi = `http://localhost:8080`;

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="Rightside">
          <div className="Topbar">
            <Topbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Veggies" element={<Veggies />} />
            <Route path="/Seeds" element={<Seeds />} />
            <Route path="/Fertilizer" element={<Fertilizer />} />
            <Route path="/Famers" element={<Famers />} />
            <Route path="/Users" element={<User />} />
            <Route path="/Orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
