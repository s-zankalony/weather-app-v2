// import PropTypes from 'prop-types';
import { icons } from './icons';

export function GetWeatherIcon({ id }) {
  const weatherIcon = icons.find((weatherIcon) => weatherIcon.id === id);
  // console.log(weatherIcon.icon);
  if (!weatherIcon) {
    return null;
  }

  return (
    <div>
      <img src={weatherIcon.icon} alt="icon" />
    </div>
  );
}
// GetWeatherIcon.propTypes = {
//   id: PropTypes.string,
// };
