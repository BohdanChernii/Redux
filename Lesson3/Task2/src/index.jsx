import { store, increment, decrement, reset } from './counter';
import './index.scss';
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
console.log(store.getState());
