import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Charts() {
  const [mainData, setMainData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(5);

  const generateChartData = () => {
    let data = [];
    mainData.forEach((item, index) => {
      if (index >= begin && index <= end) {
        data.push(item);
      }
    });
    setBegin(begin + 1);
    setEnd(end + 1);
    setChartData(data);
  };
  useEffect(() => {
    generateChartData();
  }, [mainData]);

  useEffect(() => {
  if(mainData){
    setTimeout(() => {
      generateChartData();
    }, 1000);
  }
  });

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setMainData(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center"> 
      <input type="file" name="upload" id="upload" onChange={readUploadFile} />
      <LineChart
        width={1000}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis dataKey="ECG" />
        <Tooltip />
        <Legend/>
        <Line
          type="monotone"
          dataKey="ECG"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}

export default Charts;
