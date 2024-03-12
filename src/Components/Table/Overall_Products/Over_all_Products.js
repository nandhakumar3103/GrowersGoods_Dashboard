import axios from "axios";
import "./Overall_Products.css";
import React, { useEffect, useState } from "react";

const Over_all_Products = () => {
  const [overall, setOverall] = useState([{}]);
  const [get_accepted, setGet_accepted] = useState(0);

  const [qty_error, setQuantityError] = useState({
    error: "",
    id: 0,
  });

  useEffect(() => {
    get_farmer_entered();
  }, []);

  const get_farmer_entered = async () => {
    const {
      data: { message },
    } = await axios.get(`http://localhost:8080/farmer/productList`);

    const finalProducts = message.filter(
      (item) => item.inventory_status === "InProgress"
    );

    setOverall(finalProducts);
  };

  const handleChange = ({ target: { value, name } }) => {
    setQuantityError({
      error: "",
    });
    setGet_accepted(value);
  };

  const handleAccepted = async (id) => {
    try {
      if (get_accepted !== 0) {
        await axios.post(`http://localhost:8080/farmer/acceptproduct/${id}`, {
          productQuantity: get_accepted,
        });

        get_farmer_entered();
        setGet_accepted({ accepted_qty: 0 });
      } else {
        setQuantityError({
          error: "Please enter the quantity",
          id,
        });
      }
    } catch (error) {
      alert("error");
    }
  };

  console.log(qty_error);

  const handleReject = async (id) => {
    try {
      const rejecting = await axios.put(
        `http://localhost:8080/farmer/rejectProduct/${id}`
      );

      get_farmer_entered();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Total_products_table">
      <table class="table" id="products">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Farmer </th>
            <th>Product Category</th>
            <th>Product Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
            <th>Received</th>
            <th>accepted</th>
            <th>Approve</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {overall.map((item, idx) => {
            return (
              <tr>
                <td value="id" name="id">
                  {idx + 1}
                </td>
                <td>{item.farmerName}</td>
                <td>{item.category}</td>
                <td>{item.productName}</td>
                <td>{item.mobileNo}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.productQuantity}</td>
                <td className="accepted">
                  <input
                    type="number"
                    name="accepted_qty"
                    id="accepted_qty"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  <br />
                  {qty_error.id === item.id && qty_error.error && (
                    <label style={{ color: "red", fontWeight: 800 }}>
                      {qty_error.error}
                    </label>
                  )}
                </td>
                <td>
                  <button
                    className="btn_approve"
                    name="btn_approve"
                    onClick={() => handleAccepted(item.id)}
                  >
                    Accept
                  </button>
                </td>
                <td>
                  <button
                    className="btn_reject"
                    onClick={() => handleReject(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Over_all_Products;
