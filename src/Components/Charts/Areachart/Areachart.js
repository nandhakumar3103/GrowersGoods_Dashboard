import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./Areachart.css";
import Top_products from "../../Top_Products/Top_products";

const Areachart = () => {
  const [areachart, setAreachart] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="area_charts">
      <div className="chart_area">
        <div className="chart_head">
          <h3>Revenue analytics</h3>
        </div>
        <div id="chart">
          <ReactApexChart
            options={areachart.options}
            series={areachart.series}
            type="area"
            height={250}
          />
        </div>
      </div>
      <div id="stocks">
        <Top_products />
      </div>
    </div>
  );
};

export default Areachart;
