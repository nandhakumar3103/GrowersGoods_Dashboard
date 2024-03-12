import React, { useEffect, useState } from "react";
import Table from "../../Components/Table/Individual/Table";
import axios from "axios";

const Seeds = () => {
  const [seedscount, setSeedscount] = useState([{}]);
  useEffect(() => {
    get_alldata();
  }, []);
  const get_alldata = async () => {
    const {
      data: { message },
    } = await axios.get(`http://localhost:8080/category/seeds`);
    setSeedscount(message);
    console.log(message);
  };
  return (
    <div className="veggies">
      <div className="table_Heading">Seeds In Stock</div>
      <Table data={seedscount} get_alldata={get_alldata} />
    </div>
  );
};

export default Seeds;
