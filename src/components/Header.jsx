import React from 'react';

const Header = ({ city, setCity, searchByCity }) => {
  return (
    <div className="header bg-blue-500 py-4">
      <h1 className='text-white text-2xl font-extrabold text-center'>myWeather App</h1>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          name=""
          id="input"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-l-lg px-4 py-2 w-full md:w-auto"
        />
        <button 
          id="search" 
          onClick={searchByCity}
          className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-r-lg ml-2 md:ml-0 md:mt-0"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
