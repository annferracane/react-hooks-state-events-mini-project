import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {

  const [taskList, setTaskList] = useState(tasks);

  function onDeleteHandler(id){
    //console.log(tasks);
    const newTaskList = taskList.filter(task => {
      //console.log(id);
      //console.log(task.key);
      //return task.key !== id ? task : null;
      return null;
    });
    
    //console.log(newTaskList);
    //setTaskList(newTaskList);
  }

  
  const taskArray = taskList.map(task => {
    const id = task.category + "-" + task.text.split(' ').join('');
    console.log(id);
    return <Task key={id} id={id} text={task.text} category={task.category} onDelete={() => onDeleteHandler(id)}/>
  } );

  
  return (
    <div className="tasks">
      { taskArray }
    </div>
  );
}

export default TaskList;
