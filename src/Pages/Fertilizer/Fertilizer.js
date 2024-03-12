import React, { useEffect, useState } from "react";
import "./Fertilizer.css";
import Table from "../../Components/Table/Individual/Table";
import axios from "axios";

const Fertilizer = () => {
  const [fertlizercount, setFertlizercount] = useState([{}]);
  useEffect(() => {
    get_alldata();
  }, []);
  const get_alldata = async () => {
    const {
      data: { message },
    } = await axios.get(`http://localhost:8080/category/fertilizer`);
    setFertlizercount(message);
    console.log(message);
  };
  return (
    <div className="veggies">
      <div className="table_Heading">Fertlizer In Stock</div>
      <Table data={fertlizercount} get_alldata={get_alldata} />
    </div>
  );
};

export default Fertilizer;
