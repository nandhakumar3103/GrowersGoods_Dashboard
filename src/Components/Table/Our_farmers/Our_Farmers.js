import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendapi } from "../../../App";

const Our_Farmers = () => {
  const [usercount, setUsercount] = useState([{}]);
  useEffect(() => {
    const get_usercount = async () => {
      const {
        data: { result },
      } = await axios.get(`${backendapi}/users/user_getregister`);
      setUsercount(result);
      console.log(result);
    };
    get_usercount();
  }, []);
  return (
    <div className="Total_products_table">
      <table class="table" id="products">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">User_Name</th>
            <th scope="col">User_Email</th>
          </tr>
        </thead>
        <tbody>
          {usercount.map((item, idx) => {
            console.log("aadd", item);
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{item.user_name}</td>
                <td>{item.user_email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Our_Farmers;
