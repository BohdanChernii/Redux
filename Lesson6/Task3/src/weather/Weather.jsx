import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { citiesDataSelector } from './weather.selectors';
import * as Actions from './weather.actions';
const Weather = ({ getWeatherData, citiesList }) => {
  useEffect(() => getWeatherData(), []);
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {citiesList.map(city => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature} F</span>
          </li>
        ))}
      </ul>
    </main>
  );
};
const mapState = state => {
  return {
    citiesList: citiesDataSelector(state),
  };
};
const mapDispatch = {
  getWeatherData: Actions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
