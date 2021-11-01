import { createStore } from 'redux';
import { increment, decrement, counterReducer } from './index.js';

const store = createStore(counterReducer);
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
console.log(store.getState());
