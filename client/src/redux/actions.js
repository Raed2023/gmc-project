import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASKS, SET_TASKS, SET_TASKS_ERROR, SET_TASKS_LOADING, SORT_TASKS, TOGGLE_TASK_COMPLETE } from "./actionTypes";

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
  });
  
  export const editTask = (taskId, updatedTask) => ({
    type: EDIT_TASK,
    payload: { taskId, updatedTask },
  });
  
  export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId,
  });
  
  export const toggleTaskComplete = (taskId) => ({
    type: TOGGLE_TASK_COMPLETE,
    payload: taskId,
  });
  
  export const filterTasks = (filter) => ({
    type: FILTER_TASKS,
    payload: filter,
  });
  
  export const sortTasks = (sort) => ({
    type: SORT_TASKS,
    payload: sort,
  });
  
  export const setTasks = (tasks) => ({
    type: SET_TASKS,
    payload: tasks,
  });
  
  export const setTasksLoading = (loading) => ({
    type: SET_TASKS_LOADING,
    payload: loading,
  });
  
  export const setTasksError = (error) => ({
    type: SET_TASKS_ERROR,
    payload: error,
  });
  