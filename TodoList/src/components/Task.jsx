import React from 'react';

import PropTypes from 'prop-types';

function Task({ done, text, onChange, onDelete, id }) {
  return (
    <li className={done ? 'list-item list-item_done' : 'list-item'}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
}
Task.propTypes = {
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
Task.defaultProps = {
  text: '',
  done: false,
};

export default Task;
