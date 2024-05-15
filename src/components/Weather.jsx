import React from 'react';

const Weather = ({ city, temperature, img, clouds }) => {
  return (
    <div className="weather bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg shadow-md p-4 md:p-6 lg:p-8 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="flex-grow z-10 relative">
        <h2 id="city" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">{city}</h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 lg:mb-8 text-white">{temperature}</p>
        <span id="clouds" className="text-base md:text-lg lg:text-xl text-white">{clouds}</span>
      </div>
      <img src={img} alt="" id="img" className="w-12 h-12 md:w-16 h-16 lg:w-20 h-20 ml-auto z-20" />
    </div>
  );
};

export default Weather;
