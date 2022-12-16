import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {

  const [taskList, setTaskList] = useState(tasks);

  function onDeleteHandler(taskID){
    console.log(id);
    const newTaskList = taskList.filter(task => {
      const taskId = task.category + "-" + task.text.split(' ').join('');
      console.log(task.id);
      //return task.key !== id ? task : null;
      return null;
    });
    
    //console.log(newTaskList);
    //setTaskList(newTaskList);
  }

  
  const taskArray = taskList.map(task => {
    const id = task.category + "-" + task.text.split(' ').join('');
    return <Task key={id} id={id} text={task.text} category={task.category} onDelete={onDeleteHandler}/>
  } );

  
  return (
    <div className="tasks">
      { taskArray }
    </div>
  );
}

export default TaskList;
