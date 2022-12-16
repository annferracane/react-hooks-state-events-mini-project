import React, {useState} from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import Task from "./Task";

function TaskList({tasks}) {

  const [taskList, setTaskList] = useState(tasks);

  function onDeleteHandler(id){
    const newTaskList = taskList.filter(task => {
      //console.log(task.key);
      //console.log(id);
      return task.key !== id ? task : null;
    });
    
    //console.log(newTaskList);
    //setTaskList(newTaskList);
  }

  
  const taskArray = taskList.map(task => {
    const id = task.category + "-" + task.text.split(' ').join('');
    <Task key={id} text={task.text} category={task.category} onDelete={() => onDeleteHandler(id)}/>
  } );

  
  return (
    <div className="tasks">
      { taskArray }
    </div>
  );
}

export default TaskList;
