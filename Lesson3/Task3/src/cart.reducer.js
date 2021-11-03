import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const defaultCart = {
  products: [],
};
export const cartReducer = (state = defaultCart, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.id, action.name],
      };
    case REMOVE_PRODUCT:
      const newList = state.products.filter(product => product.id !== action.userId);
      return {
        ...state,
        products: newList,
      };
    default:
      return state;
  }
};
