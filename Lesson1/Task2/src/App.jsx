import React from 'react';
import Header from './Header';
import { userDataContext, user } from './userDataContext';
class App extends React.Component {
  state = {
    userData: user,
  };

  render() {
    return (
      <div className="page">
        <Header user={this.state.userData} />
      </div>
    );
  }
}
export default App;
