import React from 'react';
import Pagination from './Pagination';
import PropTypes from './prop-types';
import User from './User.jsx';
import { usersListSelector, currentPageSelector } from './users.selectors';
import { goNext, goPrev } from './users.actions';
import { connect } from 'react-redux';

const itemsPerPage = 3;
const UsersList = ({ users, goPrevPage, goNextPage, currentPage }) => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToRender = users.slice(startIndex, endIndex);
  return (
    <div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        goNext={goNextPage}
        goPrev={goPrevPage}
        currentPage={currentPage}
      />
      <ul className="users">
        {usersToRender.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};
UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentPage: PropTypes.string.isRequired,
  goNext: PropTypes.func.isRequired,
  goPrev: PropTypes.func.isRequired,
};
const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goPrevPage: goPrev,
  goNextPage: goNext,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(UsersList);
export default ConnectedUsers;
