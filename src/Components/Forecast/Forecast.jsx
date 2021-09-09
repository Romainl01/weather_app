import React from "react";
import ChartForecast from "./ChartForecast";
import ForecastCurrentDay from "./ForecastCurrentDay";
import UpcomingDailyForecast from "./UpcomingDailyForecast";

export default function Forecast({ forecast }) {
  return (
    <div className="bg-white shadow-lg p-8 rounded-md">
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
        {/* <h3>{location}</h3> */}
        <div className="row-start-1 col-start-1 row-span-2">
            <span className="component-title">Today's Forecast</span>
          <ForecastCurrentDay forecast={forecast} />
        </div>
        <div className="row-start-2 col-start-2 col-span-2">
        <span className="component-title">Upcoming's Forecast</span>
        <UpcomingDailyForecast weekday={forecast.weekDay} />
        </div>
        <div className="row-start-1 col-start-2 col-span-2">
        <span className="component-title">Today's temperature forecast</span>
          <ChartForecast forecast={forecast} />
        </div>
      </div>
    </div>
  );
}
