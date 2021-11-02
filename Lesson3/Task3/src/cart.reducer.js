import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.action';

const defaultCart = {
  product: [],
};
export const cartReducer = (state = defaultCart, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.product, action.product],
      };
    case REMOVE_PRODUCT:
      const newList = state.product.filter(product => product.id !== action.userId);
      return {
        ...state,
        newList,
      };
    default:
      return state;
  }
};
