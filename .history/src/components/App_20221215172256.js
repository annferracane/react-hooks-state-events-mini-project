import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [taskList, setTaskList] = useState(TASKS);

  function onDeleteHandler(taskID){
    const newTaskList = taskList.filter(task => {
      const id = task.category + "-" + task.text.split(' ').join('');
      return taskID !== id ? task : null;
    });
    
    setTaskList(newTaskList);
  }

  const [categories, setCategories] = useState(CATEGORIES);

  const categoryButtons = 

  const categoryArray = categories.map(category => {
    return <button key={category} id={category} onClick={onClick}>{category}</button>
  });

  function onClickHandler(e) {
    const newCategories = categories.map(category => {

    });

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryArray={categories} />
      <NewTaskForm />
      <TaskList tasks={taskList} onDelete={onDeleteHandler}/>
    </div>
  );
}

export default App;
