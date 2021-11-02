import { ADDUSER, DELETEUSER } from './users.actions';

const initialState = {
  usersList: [],
};
export const usersReducer = (state = initialState, action) => {
  const { usersList } = state;
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: [usersList, action.userData],
      };
    case DELETEUSER:
      return {
        ...state,
        usersList: usersList.filter(user => user.id !== action.id),
      };
    default:
      return { state };
  }
};
