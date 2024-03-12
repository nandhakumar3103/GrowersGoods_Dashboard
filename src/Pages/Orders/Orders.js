import React, { useEffect, useState } from "react";
import Orders_table from "../../Components/Orders Table/Orders_table";
import axios from "axios";
import { backendapi } from "../../App";

const Orders = () => {
  const [orderdetails, setCarddetails] = useState([{}]);
  useEffect(() => {
    const get_oders = async () => {
      const {
        data: { message },
      } = await axios.get(`${backendapi}/order/get_orderDetail`);
      setCarddetails(message);
      console.log(message);
    };
    get_oders();
  }, []);
  return (
    <div className="veggies">
      <div className="table_Heading">Orders Table</div>
      <Orders_table data={orderdetails} />
    </div>
  );
};

export default Orders;
