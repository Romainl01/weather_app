import React from "react";

export default function ForecastCurrentDay({ forecast }) {
  return (
    <div className="h-auto box-border ">
      {/*             <span>{forecast.currentDay.weekday}</span>
            <span>{forecast.currentDay.day}</span> */}
      <div className="flex items-center justify-center">
        <span className=" text-xl">{forecast.currentDay.date}</span>
      </div>
      <div className="flex items-center justify-center">
        <img src={forecast.currentDay.icon} alt="icon" className="h-full" />
        <span className="text-6xl font-bold">
          {forecast.currentDay.temperature}&deg;
        </span>
      </div>
      <div className="flex items-center justify-center mb-8 mt-1">
        <span className="text-2xl font-sans font-bold">
          {forecast.currentDay.desc.charAt(0).toUpperCase() +
            forecast.currentDay.desc.slice(1)}
        </span>
      </div>
      <div className="flex items-center justify-center my-8">
        <span className="text-xl font-sans font-medium">Feels like: </span>
        <span className="text-xl font-sans font-bold ml-2">
          {forecast.currentDay.feelsLike}&deg;
        </span>
      </div>
      <div className="flex items-center justify-around my-8 w-full h-full text-center text-lg font-medium">
        <div className="flex flex-col text-black text-lg w-1/6 h-auto">
          <svg className="stroke-current w-auto h-auto p-2" viewBox="0 0 20 20">
            <path
              fill="rgba(96, 165, 250,1)"
              stroke-width="0"
              d="M18.935,18.509h-3.83c0-2.819-2.285-5.105-5.104-5.105s-5.105,2.286-5.105,5.105H1.066c-0.234,0-0.425,0.19-0.425,0.426c0,0.234,0.191,0.425,0.425,0.425h17.869c0.234,0,0.425-0.19,0.425-0.425C19.359,18.699,19.169,18.509,18.935,18.509 M5.746,18.509c0-2.351,1.905-4.254,4.254-4.254s4.255,1.903,4.255,4.254H5.746zM14.813,14.298l1.805-1.806c0.166-0.166,0.166-0.436,0-0.602c-0.166-0.167-0.436-0.167-0.602,0l-1.806,1.805c-0.165,0.166-0.165,0.436,0,0.603C14.378,14.463,14.647,14.463,14.813,14.298 M9.575,9.575v2.552c0,0.235,0.19,0.426,0.425,0.426s0.425-0.19,0.425-0.426V9.575c0-0.235-0.19-0.426-0.425-0.426S9.575,9.339,9.575,9.575 M5.187,14.298c0.167,0.165,0.436,0.165,0.603,0c0.166-0.167,0.166-0.437,0-0.603l-1.806-1.805c-0.167-0.167-0.435-0.167-0.602,0c-0.166,0.166-0.166,0.436,0,0.602L5.187,14.298z M7.448,4.044h0.851v2.127c0,0.235,0.19,0.425,0.425,0.425h2.553c0.234,0,0.426-0.19,0.426-0.425V4.044h0.851c0.234,0,0.425-0.19,0.425-0.425c0-0.117-0.047-0.224-0.124-0.301l-2.553-2.552C10.224,0.688,10.117,0.641,10,0.641S9.776,0.688,9.699,0.766L7.146,3.318C7.07,3.395,7.022,3.501,7.022,3.619C7.022,3.854,7.213,4.044,7.448,4.044 M10,1.667l1.525,1.525h-0.249c-0.234,0-0.425,0.191-0.425,0.426v2.127H9.149V3.619c0-0.235-0.19-0.426-0.425-0.426H8.475L10,1.667z"
            ></path>
          </svg>
          <span>{forecast.currentDay.sunrise}</span>
        </div>
        <div className="flex flex-col text-black w-1/6 h-auto">
           <svg className="stroke-current w-auto h-auto p-2" viewBox="0 0 20 20">
            <path
              fill="rgba(96, 165, 250,1)"
              stroke-width="0"
              d="M5.163,5.768c0.167,0.167,0.438,0.167,0.605,0c0.167-0.167,0.167-0.438,0-0.604L3.953,3.349c-0.167-0.167-0.438-0.167-0.604,0c-0.167,0.167-0.167,0.437,0,0.604L5.163,5.768z M14.837,5.768l1.814-1.814c0.167-0.167,0.167-0.438,0-0.604c-0.168-0.167-0.438-0.167-0.605,0l-1.813,1.814c-0.167,0.167-0.167,0.437,0,0.604C14.399,5.935,14.67,5.935,14.837,5.768 M10,4.014c0.236,0,0.428-0.191,0.428-0.428V1.021c0-0.236-0.192-0.428-0.428-0.428S9.572,0.785,9.572,1.021v2.565C9.572,3.823,9.764,4.014,10,4.014 M18.979,10h-3.848c0-2.833-2.297-5.131-5.131-5.131c-2.833,0-5.131,2.297-5.131,5.131H1.021c-0.236,0-0.428,0.191-0.428,0.428s0.192,0.428,0.428,0.428h17.957c0.236,0,0.428-0.191,0.428-0.428S19.215,10,18.979,10 M5.725,10c0-2.361,1.914-4.275,4.275-4.275S14.276,7.639,14.276,10H5.725zM12.565,15.985H11.71v-2.138c0-0.235-0.191-0.427-0.428-0.427H8.717c-0.236,0-0.428,0.191-0.428,0.427v2.138H7.435c-0.235,0-0.427,0.191-0.427,0.428c0,0.118,0.047,0.226,0.125,0.304l2.565,2.564c0.077,0.078,0.185,0.125,0.302,0.125s0.225-0.047,0.302-0.125l2.565-2.564c0.078-0.078,0.126-0.186,0.126-0.304C12.993,16.177,12.802,15.985,12.565,15.985 M10,18.374l-1.533-1.533h0.25c0.236,0,0.428-0.191,0.428-0.428v-2.138h1.709v2.138c0,0.236,0.192,0.428,0.428,0.428h0.251L10,18.374z"
            ></path>
          </svg>
          <span>{forecast.currentDay.sunset}</span>
        </div>
      </div>
    </div>
  );
}
