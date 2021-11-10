import React from 'react';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import { store } from './store';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}
export default App;
