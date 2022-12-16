import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const taskArray = tasks.map(task => <Task text={task.} category={}/>)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
