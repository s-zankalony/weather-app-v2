import { useState } from 'react';


const getWeatherData = async (city) => {
  const [weather, setWeather] = useState('');
  const myApi = process.env['REACT_APP_API_KEY'];
  const url = process.env['REACT_APP_API_URL'];

  const response = await fetch(`${url}/weather?q=${city}&appid=${myApi}`);
  const data = await response.json();
  setWeather(data);
};

export default getWeatherData;
