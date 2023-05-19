import axios from 'axios';
import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASK,
} from './actionstypes';

export const deleteTask = (taskID) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/TaskRoutes/delete/${taskID}`);
      dispatch({
        type: DELETE_TASK,
        payload: taskID,
      });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
};

export const TaskAdd = (newTask) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/TaskRoutes/Add', newTask);
      console.log(response)
      dispatch({
        type: ADD_TASK,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };
};

export const completeTask = (taskID) => {
  return async (dispatch) => {
    try {
      await axios.put(`/TaskRoutes/update/${taskID}`);
      dispatch({
        type: COMPLETE_TASK,
        payload: taskID,
      });
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };
};

export const taskEdit = (editedTask) => {
  return async (dispatch) => {
    try {
      await axios.put(`/TaskRoutes/update/${editedTask.id}`, editedTask);
      dispatch({
        type: EDIT_TASK,
        payload: editedTask,
      });
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };
};

export const filterTask = () => {
  return { type: FILTER_TASK };
};
