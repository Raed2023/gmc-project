import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask,editTask,deleteTask,toggleTaskComplete,filterTasks,sortTasks,setTasks,setTasksLoading } from '../../redux/actions';

const Admin = () => {
  const {tasks,loading,error} = useSelector((state) => state);
 
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulating task fetching from an API
    dispatch(setTasksLoading(true));

    // Simulating API request
    setTimeout(() => {
      const fetchedTasks = [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false },
      ];

      dispatch(setTasks(fetchedTasks));
      dispatch(setTasksLoading(false));
    }, 2000);
  }, [dispatch]);

  const handleAddTask = () => {
    const newTask = {
      id: tasks && tasks.length > 0 ? tasks.length + 1 : 1,
      title: `Task ${tasks && tasks.length > 0 ? tasks.length + 1 : 1}`,
      completed: false,
    };
  
    dispatch(addTask(newTask));
  };
  
  

  const handleEditTask = (taskId, updatedTask) => {
    dispatch(editTask(taskId, updatedTask));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTaskComplete = (taskId) => {
    dispatch(toggleTaskComplete(taskId));
  };

  const handleFilterTasks = (filter) => {
    dispatch(filterTasks(filter));
  };

  const handleSortTasks = (sort) => {
    dispatch(sortTasks(sort));
  };

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <div className="admin-container">
      <h1 className="task-list-title">Task List</h1>
      <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
      <ul>
        {
        tasks&&
        tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <button onClick={() => handleEditTask(task.id, { ...task, title: 'Updated Task' })}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button onClick={() => handleToggleTaskComplete(task.id)}>Toggle Complete</button>
          </li>
        ))}
      </ul>
      <div>
        <label>
          Filter:
          <input className="filter-input" type="text" onChange={(e) => handleFilterTasks(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Sort:
          <select className="sort-select" onChange={(e) => handleSortTasks(e.target.value)}>
            <option value="">None</option>
            <option value="title">Title</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Admin;
