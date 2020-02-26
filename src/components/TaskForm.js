import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask, clearAll, editItem, editTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task"
        value={title}
        onChange={handleChange}
        required
      />
      <div className="buttons">
        <button type="submit">{editItem ? "Edit Task" : "Add Item"}</button>
        <button onClick={clearAll}>Clear</button>
      </div>
    </form>
  );
};

export default TaskForm;
