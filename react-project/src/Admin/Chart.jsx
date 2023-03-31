import React, { useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";
import { UserData2 } from "./Data";
import { categoriesData } from "./Data";

const Chart = () => {
  const [orderData, setorderData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Order Received",
        data: UserData.map((data) => data.OrderReceived),
        backgroundColor: [
          "#fb0aff",
        ],
        borderColor: "#d33fed",
        borderWidth: 2,
      },
    ],
  });
  const [userData, setUserData] = useState({
    labels: UserData2.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData2.map((data) => data.OrderReceived),
        backgroundColor: [
          "#7bfb5b",
        ],
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  });
  const [categoryData, setcategoryData] = useState({
    labels: categoriesData.map((data) => data.type),
    datasets: [
      {
        data: categoriesData.map((data) => data.quantity),
        backgroundColor: [
          "#57fcf6",
          "#f6ff4b",
          "#ff6439",
          "#7bfb5b",
          "#ff69ee",
          "#d33fed",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className="App" 
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    }}
    >
      <div style={{ width: "42%", margin: "auto", marginTop: "50px" }}>
        <PieChart chartData={categoryData} />
      </div>
      <div
        style={{
          margin:"auto",
          display: "flex",
          flexDirection: "column",
          width: "55%",
        }}
      >
        <div style={{ width: "85%", margin:"auto" }}>
          <LineChart chartData={orderData} />
        </div>
        <div style={{ width: "85%", margin:"auto" }}>
          <BarChart chartData={userData} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
