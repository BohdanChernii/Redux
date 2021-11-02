import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.action';

const defaultCart = {
  products: [],
};
export const cartReducer = (state = defaultCart, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
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
