import React from 'react';
import TasksList from './TasksList';
import { PropTypes } from 'prop-types';
import * as Actions from './tasks/tasks.actions';
import { connect } from 'react-redux';
import { sortedTaskListSelector } from './tasks/tasks.selectors';
class TodoList extends React.Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <TasksList
          tasks={this.props.tasks}
          handleTaskCreate={this.props.createTask}
          handleTaskStatusChange={this.props.updateTask}
          handleTaskStatusDelete={this.props.deleteTask}
        />
      </>
    );
  }
}
const mapDispatch = {
  getTaskList: Actions.getTaskList,
  createTask: Actions.createTask,
  deleteTask: Actions.deleteTask,
  updateTask: Actions.updateTask,
};
const mapState = state => {
  return {
    tasks: sortedTaskListSelector(state),
  };
};
TodoList.propTypes = {
  getTaskList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};
export default connect(mapState, mapDispatch)(TodoList);
