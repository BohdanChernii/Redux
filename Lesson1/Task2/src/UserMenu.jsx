import React from 'react';
import { userDataContext } from './userDataContext';
class UserMenu extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <userDataContext.Provider value={user}>
        <div className="menu">
          <span className="menu__greeting">Hello, {this.context.name}</span>
          <img alt="User Avatar" src={this.context.avatar_url} className="menu__avatar" />
        </div>
      </userDataContext.Provider>
    );
  }
}
UserMenu.contextType = userDataContext;
export default UserMenu;
