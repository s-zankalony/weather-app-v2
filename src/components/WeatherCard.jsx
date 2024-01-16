import { FaSearchLocation } from 'react-icons/fa';
import { WiCelsius } from 'react-icons/wi';
import { useState } from 'react';
import weatherIcons from '../assets/WeatherIcons';

const WeatherCard = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [condition, setCondition] = useState('');
  const [icon, setIcon] = useState('');

  const handleChange = (e) => {
    // e.preventDefault();
    setCity(e.target.value);
  };

  const getWeatherData = async (e) => {
    e.preventDefault();
    const myApi = import.meta.env.VITE_API_KEY;
    const url = import.meta.env.VITE_API_URL;

    // const response = await fetch(
    //   `${url}/weather?q=${city}&appid=${myApi}&units=metric`
    // );
    // const data = await response.json();

    // if (data) {
    //   setTemp(Math.round(data.main.temp));
    //   setCondition(data.weather[0].description);
    //   return temp, condition;
    // }

    // response.json().then((weather) => {
    //   setTemp(Math.round(weather.main.temp));
    //   setCondition(weather.weather[0].description);
    // });

    await fetch(`${url}/weather?q=${city}&appid=${myApi}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setTemp(Math.round(data.main.temp));
        setCondition(data.weather[0].description);
        setIcon(data.weather[0].icon);
        console.log(icon);
      });
  };
  const src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="card">
      <form onSubmit={getWeatherData}>
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
      <div className="weather-icon">
        <img src={src} alt={condition} />
      </div>
      <div>
        <div className='temp'>
          <p>{temp ? temp : 'Temp'}</p>{' '}
          <span className="unit">
            <WiCelsius />
          </span>
        </div>
        <p>{condition ? condition : 'Condition'}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
