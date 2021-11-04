import React from 'react';
import Pagination from './Pagination';
import User from './User';
import { goNext, goPrev } from './users/users.actions';
import { connect } from 'react-redux';

const itemsPerPage = 3;
const UsersList = ({ users, goPrevPage, goNextPage, currentPage }) => {
  const endIndex = itemsPerPage * currentPage;
  const startIndex = (currentPage - 1) * itemsPerPage;
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
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};
const mapState = state => {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage,
  };
};

const mapDispatch = {
  goPrevPage: goPrev,
  goNextPage: goNext,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(UsersList);
export default ConnectedUsers;
