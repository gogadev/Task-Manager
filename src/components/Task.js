import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskContext);
  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div className="task-btn">
        <button onClick={() => removeTask(task.id)} className="btn-delete">
          <i className="fas fa-trash-alt"></i>
        </button>
        <button onClick={() => findItem(task.id)} className="edit">
          <i className="fas fa-pen-fancy"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
