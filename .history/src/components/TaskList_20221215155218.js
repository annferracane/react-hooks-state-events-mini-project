import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const [tasks, setTasks] = useState(tasks);

  function onDeleteHandler(){

  }

  const taskArray = tasks.map(task => <Task key={task.text + "-" + task.category} text={task.text} category={task.category} onDelete={onDeleteHandler}/>);

  

  return (
    <div className="tasks">
      { taskArray }
    </div>
  );
}

export default TaskList;
