import { useState } from 'react';

const GetWeatherData = async (city) => {
  const [weather, setWeather] = useState('');
  const myApi = import.meta.env.REACT_APP_API_KEY;
  const url = import.meta.env.REACT_APP_API_URL;

  const response = await fetch(`${url}/weather?q=${city}&appid=${myApi}`);
  const data = await response.json();
  setWeather(data);
  return weather;
};

export default GetWeatherData;
