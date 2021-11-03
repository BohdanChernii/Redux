export const ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'CART/REMOVE_PRODUCT';

export const addProduct = name => {
  return {
    type: ADD_PRODUCT,
    name,
  };
};

export const removeProduct = id => {
  return {
    type: REMOVE_PRODUCT,
    id,
  };
};
