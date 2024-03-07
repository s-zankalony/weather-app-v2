import { WiCelsius } from 'react-icons/wi';
import { useState } from 'react';
import { SearchCard } from './SearchCard';
import { GetWeatherIcon } from './GetWeatherIcon';
import axios from 'axios';

const WeatherCard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({
    temp: null,
    condition: '',
    iconId: '',
    name: '',
    country: '',
    weatherIconSrc: '',
    hasError: false,
    message: '',
    initial: true,
  });
  // console.log(weatherData);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherData = async (e) => {
    e.preventDefault();
    const backendServer = '/api/v1/weather';
    const searchParams = new URLSearchParams({ city: city }).toString();

    const customAxios = axios.create({
      baseURL: backendServer,
    });

    try {
      const response = await customAxios.get(`/?${searchParams}`);
      const data = await response.data;
      // console.log(data);

      setWeatherData({
        temp: Math.round(data.main.temp),
        condition: data.weather[0].description,
        iconId: data.weather[0].icon,
        name: data.name,
        country: data.sys.country,
        weatherIconSrc: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        hasError: false,
        initial: false,
      });
      console.log(weatherData);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setWeatherData({
          ...weatherData,
          message: error.response.data.message,
          hasError: true,
          initial: false,
        });
      }
    }
  };
  if (weatherData.initial === true) {
    return (
      <>
        <SearchCard handleChange={handleChange} getData={getWeatherData} />
      </>
    );
  } else {
    return (
      <>
        <SearchCard handleChange={handleChange} getData={getWeatherData} />

        {weatherData.hasError ? (
          <div id="error-card" className="card">
            <h4 id="city-title">{weatherData.message}</h4>
          </div>
        ) : (
          <div id="result-card" className="card">
            <h4 id="city-title">
              {weatherData.name}, {weatherData.country}
            </h4>

            <div className="weather-icon">
              {
                <GetWeatherIcon
                  id={weatherData.iconId ?? weatherData.weatherIconSrc}
                />
              }
              {/* ) ?? <img src={weatherData.weatherIconSrc} alt="weather icon" />} */}
            </div>

            <div>
              <div className="temp">
                <p>{weatherData.temp ?? 'Temp'}</p>
                <span className="unit">
                  <WiCelsius />
                </span>
              </div>
              <p className="condition">
                {weatherData.condition ? weatherData.condition : 'Condition'}
              </p>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default WeatherCard;
