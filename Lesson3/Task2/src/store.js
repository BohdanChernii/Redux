import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';
export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};
export const initialState = {
  history: [],
};
const counterReducer = (state = initialState, action) => {
  const { history } = state;

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        history: [...history, '+1'],
      };
    case DECREMENT:
      return {
        ...state,
        history: history.concat(-1),
      };
    case RESET:
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
