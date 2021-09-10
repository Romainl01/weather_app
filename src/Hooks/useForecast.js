import { useState } from "react";
import moment from "moment";
require('moment-timezone');

const API_key = process.env.React_App_Api_Key;

const useForecast = () => {
  // console.log("Its useForecast here");

  const [isError, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [locationAPI, setLocationAPI] = useState('');

  // getApiData
  const getApiData = async (location) => {
    if ('location: ') {
      //Call the open weather map api with the location and api key
      //console.log(location);
      const API_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}&units=metric`);
      // console.log(API_call);
      // Handle API error
      if (!API_call.ok || API_call.ok === false) {
        setLoading(false);
        const errorMessage = `There is no such location as '${location}'...
        Try again :)`;
        setError(errorMessage);
        setForecast(null);
        console.log("Error", isError);
        return;
      }
      //Jsonify the api response
      const API_response = await API_call.json();

      const city = API_response.name;
      console.log(city);
      const country = API_response.sys.country;
      console.log(country);
      const finalLocation = `${city}, ${country}`;
      console.log(country);
      setLocationAPI(finalLocation);
      console.log(locationAPI);
      
      const lat = API_response.coord.lat;
      const long = API_response.coord.lon;
      const API_call_2 = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts&appid=${API_key}&units=metric`
      );
      const API_response_2 = await API_call_2.json();
      console.log(API_response_2);

      return API_response_2;
    }
  };

  //gatherForecastData
  const gatherForecastData = (data) => {
    const getCurrentDayForecast = (data) => {
      /*       const goodUnix = data.current.dt + data.timezone_offset;*/
      const sunsetTime = new Date(
        (data.current.sunset + data.timezone_offset) * 1000
      );
      const sunriseTime = new Date(
        (data.current.sunrise + data.timezone_offset) * 1000
      );

        const adjustedTime = moment.tz(data.timezone).format('HH:mm - Do MMMM YYYY');

      return {
        /*weekday: moment.unix(goodUnix).format("dddd"),
        day: moment.unix(goodUnix).format("MMMM Do YYYY"), */
        location: locationAPI,
        date: adjustedTime,
        temperature: Math.round(data.current.temp),
        feelsLike: Math.round(data.current.feels_like),
        desc: data.current.weather[0].description,
        //We use getUTC methods and not getHours for example because we already took into account the timezone offset
        sunset: sunsetTime.getUTCHours() + ":" + sunsetTime.getUTCMinutes(),
        sunrise: sunriseTime.getUTCHours() + ":" + sunriseTime.getUTCMinutes(),
        icon: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
      };
    };

    const getHourlyDayForecast = (data) => {
      const filteredData = data.hourly.slice(0, 10);
      let hours = [];
      let hourlyTemp = [];
      let hourlyDesc = [];
      let hourlyIcons = [];

      for (let i = 0; i < filteredData.length; i++) {
        // To get the good hour not the UTC
        let date = new Date((filteredData[i].dt + data.timezone_offset) * 1000);
        let hour = date.getHours();
        hours.push(hour + "h");
        hourlyTemp.push(Math.round(filteredData[i].temp));
        hourlyDesc.push(filteredData[i].weather[0].description);
        hourlyIcons.push(
          `http://openweathermap.org/img/wn/${filteredData[i].weather[0].icon}@2x.png`
        );
      }
      return {
        temperature: hourlyTemp,
        hours: hours,
        desc: hourlyDesc,
        icon: hourlyIcons,
      };
    };

    const getWeeklyForecast = (data) => {
        const filteredData = data.daily.slice(1, 6);
        
        let weeklyArray = [];
        for (let i = 0; i < filteredData.length; i++) {
            // To get the good hour not the UTC
            let index = i;
            let date = (filteredData[i].dt + data.timezone_offset);
            let day = moment.unix(date).format("Do MMM");
            let weekday = moment.unix(date).format("dddd");
            const dayObject = {
                dailyDate : day,
                dailyWeekDay: weekday, 
                dailyTemp : Math.round(filteredData[i].temp.day),
                dailyDesc: filteredData[i].weather[0].description,
                dailyIcon: `http://openweathermap.org/img/wn/${filteredData[i].weather[0].icon}@2x.png`,
                dailyIndex: index
            };
                weeklyArray.push(dayObject);
          }

          return weeklyArray
    }

    const currentDay = getCurrentDayForecast(data);
    const hourlyDay = getHourlyDayForecast(data);
    const weekDay = getWeeklyForecast(data);

    setForecast({ currentDay, hourlyDay, weekDay});
    setLoading(false);
  };

  const callApi = async (location) => {
    //From the moment where we delete the input the forecast dissapear
    // I added the check : !location.trim(), because if you only write ' ' the api doen't bring an error but it fetches data from baku.
    if(!location || location==='' || !location.trim()) {
    setForecast(null);
    setError(null);
    setLoading(false);
    return;
    }
    setLoading(true);
    setForecast(null);
    setError(null);

    const response = await getApiData(location);
    //If the api doesn't respond, no need to go further.
    if (!response) return;
    await gatherForecastData(response);
  };
  return { forecast, isLoading, isError, callApi };
};

export default useForecast;
