import React from 'react';

const DailyForecast = ({ dailyForecast }) => {
  return (
    <div className="forecastD bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg shadow-md p-4 md:p-6 lg:p-8">
      <div className="divider2 h-px bg-gray-300 mb-4 md:mb-6 lg:mb-8"></div>
      <p className="cast-header text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 lg:mb-8 text-white">Next 4 days forecast</p>
      <div className="flex flex-wrap justify-between">
        {dailyForecast.map((forecast, index) => (
          <div className="dayF bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out p-4 md:p-6 lg:p-8 mb-4 md:mb-6 lg:mb-8 mr-0 sm:mr-4 md:mr-6 lg:mr-8" key={index}>
            <p className="date text-lg md:text-xl lg:text-2xl font-semibold mb-2">{forecast.date}</p>
            <p className="text-base md:text-lg lg:text-xl mb-2">{forecast.temp}</p>
            <p className="desc text-sm md:text-base lg:text-lg">{forecast.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
