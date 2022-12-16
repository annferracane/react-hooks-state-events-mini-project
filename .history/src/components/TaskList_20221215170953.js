import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteHandler}) {

  const [taskList, setTaskList] = useState(tasks);

  function onDeleteHandler(taskID){
    const newTaskList = taskList.filter(task => {
      const id = task.category + "-" + task.text.split(' ').join('');
      return taskID !== id ? task : null;
    });

    setTaskList(newTaskList);
  }

  
  const taskArray = tasks.map(task => {
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
