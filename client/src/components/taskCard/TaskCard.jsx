import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../../redux/reduxapp/actions";
import EditTask from "../editTask/EditTask";
import "./Taskcard.css";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="TaskCard-container">
      <h1 id={task.isDone ? "comp" : "unc"} className="TaskCard-title">
        {task.action}
      </h1>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="TaskCard-button"
      >
        delete
      </button>
      <button
        onClick={() => dispatch(completeTask(task.id))}
        className="TaskCard-button"
      >
        {task.isDone ? "Undo" : "Complete"}
      </button>
      <EditTask taskedit={task} />
    </div>
  );
};

export default TaskCard;
