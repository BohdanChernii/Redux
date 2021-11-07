import { weatherData } from './gateway';
export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

export const weatherDataReceived = citiesData => {
  return {
    type: GET_WEATHER_DATA,
    payload: { citiesData },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    weatherData().then(citiesData => {
      dispatch(weatherDataReceived(citiesData));
    });
  };
};
