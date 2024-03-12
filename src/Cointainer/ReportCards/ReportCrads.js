import React, { useEffect, useState } from "react";
import "./ReportCards.css";
import image1 from "../../Assets/Image/Gheorghita_fruitVeg_adobe_hero_700x530px.jpg";
import image2 from "../../Assets/Image/822fe09b6fc030a16364934bf2ed06ec.webp";
import image3 from "../../Assets/Image/NEWS2FARMER.jpg";
import image4 from "../../Assets/Image/download.jpg";
import { Link } from "react-router-dom";
import Homecards from "../../Components/Homecards/Homecards";
import axios from "axios";

const ReportCrads = () => {
  // const [totalcount, setTotalcount] = useState([{}]);
  // const [veggiescount, setVeggiescount] = useState([{}]);
  // const [seedscount, setSeedscount] = useState(0);
  // const [fertlizercount, setFertlizercount] = useState([{}]);

  const [count, setCount] = useState({
    totalcount: 0,
    veggiescount: 0,
    seedscount: 0,
    fertlizercount: 0,
  });

  useEffect(() => {
    // get_seeds();
    // get_fertilizer();
    // get_veggies();
    get_data();
  }, []);

  const get_data = async () => {
    const get_seeds = await axios.get(`http://localhost:8080/category/seeds`);
    setCount((prevState) => ({
      ...prevState,
      seedscount: get_seeds.data.message.length,
    }));

    const get_fertilizer = await axios.get(
      `http://localhost:8080/category/fertilizer`
    );
    setCount((prevState) => ({
      ...prevState,
      fertlizercount: get_fertilizer.data.message.length,
    }));
    const get_veggies = await axios.get(
      `http://localhost:8080/category/vegetables`
    );
    setCount((prevState) => ({
      ...prevState,
      veggiescount: get_veggies.data.message.length,
    }));
  };

  // const get_seeds = async () => {
  //   const {
  //     data: { message },
  //   } = await axios.get(`http://localhost:8080/category/seeds`);
  //   setSeedscount(message.length);
  //   console.log(message);
  // };
  // const get_fertilizer = async () => {
  //   const {
  //     data: { message },
  //   } = await axios.get(`http://localhost:8080/category/fertilizer`);
  //   setFertlizercount(message.length);
  //   console.log(message);
  // };

  // const get_veggies = async () => {
  //   const {
  //     data: { message },
  //   } = await axios.get(`${backendapi}/category/vegetables`);
  //   setVeggiescount(message.length);
  //   // console.log(message);
  // };

  return (
    <>
      <Homecards
        cardTitle={"Total Products"}
        cardValue={count.fertlizercount + count.veggiescount + count.seedscount}
        cardview={"Famers"}
        Report={10}
        image={image1}
      />
      <Homecards
        cardTitle={"Total Vegtables"}
        cardValue={count.veggiescount}
        cardview={"Veggies"}
        Report={10}
        image={image2}
      />
      <Homecards
        cardTitle={"Total Seeds"}
        cardValue={count.seedscount}
        cardview={"Seeds"}
        Report={10}
        image={image3}
      />
      <Homecards
        cardTitle={"Total Fertilizer"}
        cardValue={count.fertlizercount}
        cardview={"Fertilizer"}
        Report={10}
        image={image4}
      />
    </>
  );
};

export default ReportCrads;
