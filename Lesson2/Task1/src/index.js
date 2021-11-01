import { createStore } from 'redux';

const decrement = 'COUNTER/DECREMENT';
const increment = 'COUNTER/INCREMENT';

const increment = () => {
  return {
    type: increment,
  };
};

const decrement = () => {
  return {
    type: decrement,
  };
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case increment:
      return state + 1;
    case decrement:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
