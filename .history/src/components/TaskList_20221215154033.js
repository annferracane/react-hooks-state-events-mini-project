import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const taskArray = tasks.map(task => <Task text={task.text} category={task.category}/>);

  const [tasks, setTasks] = useState(tasks);

  return (
    <div className="tasks">
      { taskArray }
    </div>
  );
}

export default TaskList;
