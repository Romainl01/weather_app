import React from "react";

export default function UpcomingDailyForecastItem({ forecast}) {

  return (
    <div className={`${forecast.dailyIndex===0 ? " bg-blue-400 text-center text-white rounded-md shadow-inner transform hover:scale-105" : "text-center transform hover:scale-105"}`}>
      <div className="font-bold text-lg">
        <span>{forecast.dailyWeekDay}</span>
      </div>
      <div>
        <span>{forecast.dailyDate}</span>
      </div>
      <div className="flex items-center justify-center">
        <img src={forecast.dailyIcon} alt="icon" />
      </div>

      <div className="font-bold text-lg">
        <span>{forecast.dailyTemp}&deg;</span>
      </div>
      <div>
        <span>
          {forecast.dailyDesc.charAt(0).toUpperCase() +
            forecast.dailyDesc.slice(1)}
        </span>
      </div>
    </div>
  );
}
