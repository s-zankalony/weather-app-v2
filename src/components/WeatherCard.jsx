// import * as dotenv from 'dotenv';
// dotenv.config();
import { FaSearchLocation } from 'react-icons/fa';
import { WiCloud } from 'react-icons/wi';
import { useState } from 'react';
import GetWeatherData from './getWeatherData';

const WeatherCard = () => {
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const weatherData = await GetWeatherData(city);
    setWeather(weatherData);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Insert city name..."
          name="city"
          onChange={handleChange}
        />
        <button type="submit">
          <FaSearchLocation />
        </button>
      </form>
      <div>
        <WiCloud />
      </div>
      <div>
        <p>{weather.temp}</p>
        <p>{weather.condition}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
