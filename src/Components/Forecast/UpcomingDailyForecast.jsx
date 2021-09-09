import React from "react";
import UpcomingDailyForecastItem from "./UpcomingDailyForecastItem";

export default function UpcomingDailyForecast({ weekday }) {
  return (
    <div>
      <div className="grid lg:grid-flow-col">
      {weekday.map(day => (<UpcomingDailyForecastItem forecast={day} />))}
      </div>
    </div>
  );
}
