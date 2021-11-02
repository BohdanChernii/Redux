export const ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'CART/REMOVE_PRODUCT';

export const addProduct = (id, product) => {
  return {
    type: ADD_PRODUCT,
    product,
    id,
  };
};

export const removeProduct = id => {
  return {
    type: REMOVE_PRODUCT,
    id,
  };
};
