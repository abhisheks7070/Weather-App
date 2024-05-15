import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Weather from './components/Weather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import './App.css';

const apikey = "294fc07452c754b3ea688e52cf359951";

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
        fetchWeatherData(url);
      });
    }
  }, []);

  const fetchWeatherData = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      setWeatherData(data);
      weatherReport(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const searchByCity = async () => {
    try {
      const urlsearch = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
      const response = await axios.get(urlsearch);
      const data = response.data;
      console.log(data);
      setWeatherData(data);
      weatherReport(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
    setCity('');
  };

  const weatherReport = async (data) => {
    const urlcast = `http://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${apikey}`;
    try {
      const response = await axios.get(urlcast);
      const forecast = response.data;
      console.log(forecast.city);
      hourForecast(forecast);
      dayForecast(forecast);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  const hourForecast = (forecast) => {
    const hourlyData = [];
    for (let i = 0; i < 6; i++) {
      const date = new Date(forecast.list[i].dt * 1000);
      hourlyData.push({
        time: (date.toLocaleTimeString(undefined, 'Asia/Kolkata')).replace(':00', ''),
        temp: `${Math.floor((forecast.list[i].main.temp_max - 273))} °C / ${Math.floor((forecast.list[i].main.temp_min - 273))} °C`,
        desc: forecast.list[i].weather[0].description
      });
    }
    setHourlyForecast(hourlyData);
  };

  const dayForecast = (forecast) => {
    const dailyData = [];
    for (let i = 8; i < forecast.list.length; i += 8) {
      dailyData.push({
        date: new Date(forecast.list[i].dt * 1000).toDateString(undefined, 'Asia/Kolkata'),
        temp: `${Math.floor((forecast.list[i].main.temp_max - 273))} °C / ${Math.floor((forecast.list[i].main.temp_min - 273))} °C`,
        desc: forecast.list[i].weather[0].description
      });
    }
    setDailyForecast(dailyData);
  };
  
 
  return (
<div className="bg-slate-600 min-h-screen font-sans flex flex-col">
  <Header city={city} setCity={setCity} searchByCity={searchByCity} />
  <main className="flex-grow container mx-auto px-4 py-8 flex flex-col">
    {weatherData && (
      <Weather
        city={`${weatherData.name}, ${weatherData.sys.country}`}
        temperature={`${Math.floor(weatherData.main.temp - 273)} °C`}
        img={`http://api.openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
        clouds={weatherData.weather[0].description}
      />
    )}
    <div className="mt-8 flex-grow">
      {/* Render Hourly Forecast Component */}
      <HourlyForecast hourlyForecast={hourlyForecast} />
    </div>
    <div className="mt-8 flex-grow">
      {/* Render Daily Forecast Component */}
      <DailyForecast dailyForecast={dailyForecast} />
    </div>
  </main>
</div>



  );
}

export default App;
