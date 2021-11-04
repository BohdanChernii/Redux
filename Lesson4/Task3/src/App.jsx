import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UsersList from './users/UsersList';
import { users } from './users/users.js';
const App = () => {
  return (
    <Provider store={store}>
      <UsersList users={users} />
    </Provider>
  );
};
export default App;
