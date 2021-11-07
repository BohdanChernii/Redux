import { GET_WEATHER_DATA } from './weather.actions';
const initialState = {
  citiesData: [],
};
export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA: {
      return {
        ...state,
        citiesData: action.payload.citiesData,
      };
    }
    default:
      return state;
  }
};
