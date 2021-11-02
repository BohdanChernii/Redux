export const SET_USER = 'USER/SETUSER';
export const REMOVE_USER = 'USER/REMOVEUSER';

export const setUser = userName => {
  return {
    type: SET_USER,
    userName,
  };
};
export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
