import { GO_NEXT, GO_PREV } from './users.actions';
import users from '../users.js';
const initialState = {
  users: { usersList: [...users], currentPage: 0 },
};
export const usersReducer = (state = initialState, action) => {
  const { currentPage } = state;
  switch (action.type) {
    case GO_NEXT:
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: state.users.currentPage + 1,
        },
      };

    case GO_PREV:
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: state.users.currentPage - 1,
        },
      };
    default:
      return state;
  }
};
