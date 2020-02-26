import React from "react";

import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";
import TaskForm from "./components/TaskForm";

import "./App.css";

function App() {
  return (
    <TaskContextProvider>
      <div className="container">
        <div className="App">
          <Header />
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskContextProvider>
  );
}

export default App;
