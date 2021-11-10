import * as tasksGateway from '../tasksGateway';
import { tasksListSelector } from './tasks.selectors';
export const TASK_LIST_RECEIVED = 'TASK_LIST_RECEIVED';
export const TASK_LIST_UPDATED = 'TASK_LIST_UPDATED';
export const TASK_LIST_DELETED = 'TASK_LIST_DELETED';

export const taskListReceived = taskList => {
  return {
    type: TASK_LIST_RECEIVED,
    payload: {
      taskList,
    },
  };
};

export const getTaskList = () => {
  const thunk = function (dispatch) {
    tasksGateway.fetchTasksList().then(taskList => dispatch(taskListReceived(taskList)));
  };
  return thunk;
};

export const createTask = text => {
  const thunk = function (dispatch) {
    const taskData = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    };
    tasksGateway.createTask(taskData).then(() => dispatch(getTaskList()));
  };
  return thunk;
};

export const updateTask = taskId => {
  const thunk = function (dispatch, getState) {
    const state = getState();
    const taskList = tasksListSelector(state);
    const task = taskList.find(task => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    tasksGateway.updateTask(taskId, updatedTask).then(() => dispatch(getTaskList()));
  };
  return thunk;
};

export const deleteTask = taskId => {
  const thunk = function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => dispatch(getTaskList()));
  };
  return thunk;
};
