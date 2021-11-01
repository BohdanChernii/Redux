import React from 'react';
import UserMenu from './UserMenu';
import { userDataContext } from './userDataContext';
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <UserMenu />
      </header>
    );
  }
}
export default Header;
