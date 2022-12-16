import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {

  //const [tasks, setTasks] = useState(tasks);

  function onDeleteHandler(){
    console.log("deleted");
  }

  const taskArray = tasks.map(task => <Task key={task.category + "-" + task.text} text={task.text} category={task.category} onDelete={onDeleteHandler}/>);

  
  return (
    <div className="tasks">
      { taskArray }
    </div>
  );
}

export default TaskList;
