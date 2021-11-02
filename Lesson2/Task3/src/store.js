import { createStore } from 'redux';
import { createReducer } from './users.reducer.js';

export const store = createStore(createReducer);
