import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { PropTypes } from 'prop-types';
const TasksList = ({ tasks, handleTaskCreate, handleTaskStatusChange, handleTaskStatusDelete }) => {
  return (
    <main className="todo-list">
      <CreateTaskInput onCreate={handleTaskCreate} />
      <ul className="list">
        {tasks.map(task => (
          <Task
            key={task.id}
            {...task}
            onChange={handleTaskStatusChange}
            onDelete={handleTaskStatusDelete}
          />
        ))}
      </ul>
    </main>
  );
};
TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleTaskCreate: PropTypes.func,
  handleTaskStatusChange: PropTypes.func,
  handleTaskStatusDelete: PropTypes.func,
};
export default TasksList;
