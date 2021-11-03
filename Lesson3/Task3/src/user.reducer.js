import { SET_USER, REMOVE_USER } from './user.actions';

export const usersReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.userName,
      };
    case REMOVE_USER:
      return null;
    default:
      return state;
  }
};
