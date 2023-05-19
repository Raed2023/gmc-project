import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TaskCard from "../taskCard/TaskCard";

const TaskList = () => { 
  const { tasks, filter } = useSelector((state) => state.taskReducer);
  useEffect(() => {
  
  }, [])
  
  console.log(tasks)
  return (
    <div>
      {filter 
        ? tasks
            .filter((el) => el.isDone === false)
            .map((el) => <TaskCard key={el.id} task={el} />)
        :tasks&& tasks.map((el) => <TaskCard key={el.id} task={el} />)}
    </div>
  );
};

export default TaskList;