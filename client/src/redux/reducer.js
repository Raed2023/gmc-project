import { ADD_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASKS, SET_TASKS, SET_TASKS_ERROR, SET_TASKS_LOADING, SORT_TASKS, TOGGLE_TASK_COMPLETE } from "./actionTypes";

const initialState = {
    tasks: [],
    filter: '',
    sort: '',
    loading: false,
    error: null,
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case EDIT_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.taskId ? action.payload.updatedTask : task
          ),
        };
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case TOGGLE_TASK_COMPLETE:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
          ),
        };
      case FILTER_TASKS:
        return {
          ...state,
          filter: action.payload,
        };
      case SORT_TASKS:
        return {
          ...state,
          sort: action.payload,
        };
      case SET_TASKS:
        return {
          ...state,
          tasks: action.payload,
        };
      case SET_TASKS_LOADING:
        return {
          ...state,
          loading: action.payload,
        };
      case SET_TASKS_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  