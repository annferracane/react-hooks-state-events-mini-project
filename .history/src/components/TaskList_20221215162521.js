import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {

  const [taskList, setTaskList] = useState(tasks);

  function onDeleteHandler(id){
    console.log("deleted");
    const newTaskList = taskList.filter(task => {
      return task.key !== id ? task : null;
    });

    //setTaskList(newTaskList);
  }

  const taskArray = taskList.map(task => <Task key={task.category + "-" + task.text} text={task.text} category={task.category} onDelete={() => onDeleteHandler(task)}/>);

  
  return (
    <div className="tasks">
      { taskArray }
    </div>
  );
}

export default TaskList;
