import { FaSearchLocation } from 'react-icons/fa';
import { WiCelsius } from 'react-icons/wi';
import { useState } from 'react';

import PropTypes from 'prop-types';

function SearchCard({ getData, handleChange }) {
  // Component code here
  return (
    <div className="card search-card">
      <form onSubmit={getData}>
        <input
          type="text"
          placeholder="Insert city name..."
          name="city"
          className="city-input"
          onChange={handleChange}
        />
        <button className="search-btn" type="submit">
          <FaSearchLocation />
        </button>
      </form>
    </div>
  );
}

SearchCard.propTypes = {
  getData: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const WeatherCard = () => {
  // const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [condition, setCondition] = useState('');
  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const [weatherIconSrc, setWeatherIconSRC] = useState('');

  const handleChange = (e) => {
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

    try {
      await fetch(`${url}/weather?q=${city}&appid=${myApi}&units=metric`)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            setName(data.message);
            setTemp('');
            setCondition('');
            setIcon('');
            setWeatherIconSRC('');
            document.getElementById('city-title').style.color = 'red';
            document.getElementById('result-card').style.display = 'none';
            document.getElementById('error-card').style.display = 'block';
          } else {
            setIcon(data.weather[0].icon);
            setWeatherIconSRC(
              `https://openweathermap.org/img/wn/${icon}@2x.png`
            );
            setTemp(Math.round(data.main.temp));
            setCondition(data.weather[0].description);
            setName(data.name);
            document.getElementById('city-title').style.color = 'inherit';
            document.getElementById('result-card').style.display = 'block';
            document.getElementById('error-card').style.display = 'none';
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchCard handleChange={handleChange} getData={getWeatherData} />
      <div id="error-card" className="card">
        <h4 id="city-title">{name}</h4>
      </div>
      <div id="result-card" className="card">
        <h4 id="city-title">{name}</h4>
        <div className="weather-icon">
          <img src={weatherIconSrc} />
        </div>
        <div>
          <div className="temp">
            <p>{temp ? temp : 'Temp'}</p>{' '}
            <span className="unit">
              <WiCelsius />
            </span>
          </div>
          <p className="condition">{condition ? condition : 'Condition'}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
