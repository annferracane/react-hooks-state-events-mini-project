import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const [tasks, setTasks] = useState(tasks);
  const taskArray = tasks.map(task => <Task text={task.text} category={task.category}/>);

  

  return (
    <div className="tasks">
      { taskArray }
    </div>
  );
}

export default TaskList;
