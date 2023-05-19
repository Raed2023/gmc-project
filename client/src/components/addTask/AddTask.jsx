import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTask, TaskAdd } from "../../redux/reduxapp/actions";
import "./Addtask.css";
import TaskList from "../taskList/TaskList";

const AddTask = () => {
  const [text, setText] = useState("");
  const { filter } = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Math.random(), action: text, isDone: false };
    text.trim() === "" ? alert("Add task") : dispatch(TaskAdd(newTask));
    setText("");
  };

  return (
    <div className="AddTask-container">
      <h1 className="AddTask-title">Your Task Manager</h1>
      <form className="AddTask-form" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="AddTask-input"
        />
        <button type="submit" className="AddTask-button">Add</button>
      </form>
      <button onClick={() => dispatch(filterTask())} className="AddTask-filterButton">
        {filter ? "Show All" : "Show Uncompleted"}
      </button>
      <TaskList/>
    </div>
  );
};

export default AddTask;
