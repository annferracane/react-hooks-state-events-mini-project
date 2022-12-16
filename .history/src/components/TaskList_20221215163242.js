import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {

  const [taskList, setTaskList] = useState(tasks);

  function onDeleteHandler(id){
    const newTaskList = taskList.filter(task => {
      //console.log(task.key);
      console.log(id);
      return task.key !== id ? task : null;
    });
    
    //console.log(newTaskList);
    //setTaskList(newTaskList);
  }

  const id = task.category} + "-" + {task.text};

  const taskArray = taskList.map(task => <Task text={task.text} category={task.category} onDelete={() => onDeleteHandler(task)}/>);

  
  return (
    <div className="tasks">
      { taskArray }
    </div>
  );
}

export default TaskList;
