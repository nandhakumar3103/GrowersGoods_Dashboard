import React, { useEffect, useState } from "react";
import "./Veggies.css";
import Table from "../../Components/Table/Individual/Table";
import axios from "axios";
import { backendapi } from "../../App";

const Veggies = () => {
  const [veggiescount, setVeggiescount] = useState([{}]);
  useEffect(() => {
    get_alldata();
  }, []);

  const get_alldata = async () => {
    const {
      data: { message },
    } = await axios.get(`${backendapi}/category/vegetables`);
    setVeggiescount(message);
    // console.log(message);
  };

  return (
    <div className="veggies">
      <div className="table_Heading">Veggies In Stock</div>
      <Table data={veggiescount} get_alldata={get_alldata} />
    </div>
  );
};

export default Veggies;
