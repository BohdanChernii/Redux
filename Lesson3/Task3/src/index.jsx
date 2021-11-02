import store from './store';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.action';
store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct(1, 'milk'));
