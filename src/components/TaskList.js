import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="task-list">
      {tasks.length ? (
        <ul className="list">
          {tasks.map(task => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-task">
          <i className="far fa-paper-plane"></i> No Tasks...
        </div>
      )}
    </div>
  );
};

export default TaskList;
