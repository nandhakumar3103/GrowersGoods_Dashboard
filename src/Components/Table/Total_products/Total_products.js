import React, { useEffect, useState } from "react";
import "./Total_products.css";
import axios from "axios";
import { backendapi } from "../../../App";

const Total_products = () => {
  const [total_products, setTotal_products] = useState([{}]);

  useEffect(() => {
    const get_total_products = async () => {
      const {
        data: { message },
      } = await axios.get(`${backendapi}/farmer/productList`);
      setTotal_products(message);
      console.log("ajha", message);
    };
    get_total_products();
  }, []);

  return (
    <div className="Total_products_table">
      <table class="table" id="products">
        <thead>
          {total_products.slice(0, 1).map((datas, idx) => {
            return (
              <tr>
                {Object.keys(datas).map((heading) => {
                  return <th>{heading}</th>;
                })}
                ;
              </tr>
            );
          })}
        </thead>
        <tbody>
          {total_products.map((datas) => {
            return (
              <tr>
                {Object.keys(datas).map((items) => {
                  return <td>{datas[items]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Total_products;
//
