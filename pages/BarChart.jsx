import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "this is the title",
        font: {
          size: 16,
        },
      },
      tooltip: {
        enabled: true,
        mode: "nearest",
      },
      legend: {
        display: true,
        text: "this is legend ",
        position: "top",
        labels: {
          font: {
            size: 16,
          },
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
    },
  };
  const data = {
    labels: [2010, 2015, 2020, 2025],
    datasets: [
      {
        label: "length",
        data: [120, 150, 170, 190],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderWidth: 1,
        borderColor: "red",
      },
    ],
  };
  return (
    <div className="h-[70vh] w-[70vw] m-auto">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
