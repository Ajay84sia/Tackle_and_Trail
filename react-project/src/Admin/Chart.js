import React from 'react'
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";
const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

const Chart = () => {
  return (
    <div className="App" style={{display:"flex" ,justifyContent:"center", alignItems:"center"}}>
    <div style={{ width: 600 }}>
      <BarChart chartData={userData} />
    </div>
    <div style={{ width: 600 }}>
      <LineChart chartData={userData} />
    </div>
    <div style={{ width: 600 }}>
      <PieChart chartData={userData} />
    </div>
  </div>
  )
}

export default Chart