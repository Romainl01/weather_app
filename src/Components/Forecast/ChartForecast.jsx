import React from "react";
import { Line } from "react-chartjs-2";

export default function ChartForecast({ forecast }) {
  /*   console.log("This is the hourly foreceast");
  console.log(forecast); */

  const tempMin = Math.min(...forecast.hourlyDay.temperature);
  const tempMax = Math.max(...forecast.hourlyDay.temperature);

  const data = {
    labels: forecast.hourlyDay.hours,
    datasets: [
      {
        label: "Température (C°) ",
        data: forecast.hourlyDay.temperature,
        fill: true,
        backgroundColor: "rgba(239, 246, 255, 1)",
        borderColor: "rgba(59, 130, 246,1)",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  
  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        suggestedMin: (tempMin-4),
        suggestedMax: (tempMax+4),
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 1.3,
      },
    },
  };


  return (
    <div>
      <Line data={data} height={100} with={100} options={options} />
    </div>
  );
}
