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

  function buildCategoryButtonArray()
  CATEGORIES.map(categor => {
    return <button key={category} id={category} onClick={(e) => onClickHandler(e)}>{category}</button>
  });

  const categoryButtonArray = CATEGORIES.map(categor => {
    return <button key={category} id={category} onClick={(e) => onClickHandler(e)}>{category}</button>
  });

  const [categoryButtons, setCategoryButtons] = useState(categoryButtonArray);

  function onClickHandler(e) {
    const newCategoryButtons = categoryButtons.map(categoryButton => {
      console.log(categoryButton)
      if(e.target.id === categoryButton.id) {
        return <button key={categoryButton.id} id={categoryButton.id} className="selected" onClick={(e) => onClickHandler(e)}>{categoryButton.value}</button>;
      } else {
        return <button key={categoryButton.id} id={categoryButton.id} className="" onClick={(e) => onClickHandler(e)}>{categoryButton.value}</button>;
      }
    });

    setCategoryButtons(newCategoryButtons); 
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
