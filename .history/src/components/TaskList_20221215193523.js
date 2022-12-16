import React from "react";
import Task from "./Task";

function TaskList({tasks, taskList, onDelete}) {

  const setTemp = taskList ? tasks : taskList;
  
  const taskArray = setTemp.map(task => {
    const id = task.category + "-" + task.text.split(' ').join('');
    return <Task key={id} id={id} text={task.text} category={task.category} onDelete={onDelete}/>
  } );

  
  return (
    <div className="tasks">
      { taskArray }
    </div>
  );
}

export default TaskList;
