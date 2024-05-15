import React from 'react';

const HourlyForecast = ({ hourlyForecast }) => {
    return (
        <div className="forecastH bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-md p-4 md:p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-opacity-50"></div>
            <p className="cast-header text-center md:text-left text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 lg:mb-8 text-white z-10 relative">Upcoming forecast</p>
            <div className="templist grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-10 relative">
                {hourlyForecast.map((forecast, index) => (
                    <div className="next bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out p-4 md:p-6 lg:p-8 flex flex-col items-center md:items-start mb-4 md:mb-6 lg:mb-8" key={index}>
                        <p className="time text-lg md:text-xl lg:text-2xl font-semibold mb-2">{forecast.time}</p>
                        <p className="text-base md:text-lg lg:text-xl mb-2">{forecast.temp}</p>
                        <p className="desc text-sm md:text-base lg:text-lg">{forecast.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HourlyForecast;
