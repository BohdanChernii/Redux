import store from './store';
import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(addUser({ id: 1, userData: 'Bohdan' }));
store.dispatch(addUser({ id: 2, userData: 'Roman' }));
store.dispatch(addUser({ id: 3, userData: 'Uriy' }));
store.dispatch(deleteUser(3));
store.dispatch(updateUser(1, { userData: 'Bodya', age: 20 }));
