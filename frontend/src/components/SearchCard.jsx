import { FaSearchLocation } from 'react-icons/fa';
import PropTypes from 'prop-types';

export function SearchCard({ getData, handleChange }) {
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
