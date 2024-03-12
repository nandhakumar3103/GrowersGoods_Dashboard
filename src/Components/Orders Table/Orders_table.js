import React, { useState } from "react";

const Orders_table = ({ data }) => {
  return (
    <div className="Total_products_table">
      <table class="table" id="products">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">First_name</th>
            <th scope="col">Last_name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Product</th>
            <th scope="col">Kg</th>
            <th scope="col">order_at</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
            <th scope="col">Pincode</th>
            <th scope="col">Approve</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            console.log("aadd", item);
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.mobile_number}</td>
                <td>{item.product_name}</td>
                <td>{item.kg}</td>
                <td>{item.order_at}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.email}</td>
                <td>{item.pincode}</td>
                <td>
                  <button
                    className="products_edit_btn"
                    // onClick={() => {
                    //   handleClick(rowdata);
                    // }}
                  >
                    Accept
                  </button>
                </td>
                <td>
                  <button className="products_delete_btn">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders_table;
