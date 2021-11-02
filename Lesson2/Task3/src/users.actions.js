export const ADDUSER = 'ADDUSER';
export const DELETEUSER = 'DELETEUSER';
export const addUser = userData => {
  return {
    type: ADDUSER,
    userData,
  };
};
export const deleteUser = id => {
  return {
    type: DELETEUSER,
    id,
  };
};
