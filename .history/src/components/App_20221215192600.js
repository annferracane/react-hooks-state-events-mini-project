import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

const [taskList, setTaskList] = useState(TASKS);

function App() {

  

  function onDeleteHandler(taskID){
    const newTaskList = taskList.filter(task => {
      const id = task.category + "-" + task.text.split(' ').join('');
      return taskID !== id ? task : null;
    });
    
    setTaskList(taskList => taskList = newTaskList);
  }

  const categoryButtonArray = CATEGORIES.map(category => {
    return <button key={category} id={category} className="" onClick={(e) => onClickHandler(e)}>{category}</button>
  });

  const [categoryButtons, setCategoryButtons] = useState(categoryButtonArray);

  function onClickHandler(e) {
    const newCategoryButtons = categoryButtons.map(categoryButton => {
      if(e.target.id === categoryButton.key) {
        return <button key={categoryButton.key} id={categoryButton.key} className="selected" onClick={(e) => onClickHandler(e)}>{categoryButton.key}</button>;
      } else {
        return <button key={categoryButton.key} id={categoryButton.key} className="" onClick={(e) => onClickHandler(e)}>{categoryButton.key}</button>;
      }
    });

    setCategoryButtons(newCategoryButtons);

    const newTaskList = taskList.filter(task => {
      if(e.target.id === "All") {
        return task;
      } else {
        return e.target.id === task.category ? task : null;
      }
    });

    setTaskList(taskList => taskList = newTaskList);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryArray={categoryButtons} />
      <NewTaskForm />
      <TaskList tasks={taskList} onDelete={onDeleteHandler}/>
    </div>
  );
}

export default App;
