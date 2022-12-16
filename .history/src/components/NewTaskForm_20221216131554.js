import React, {useState} from "react";


function NewTaskForm({categories, onSubmitTaskHandler}) {
  const [categorySelection, setCategorySelection] = useState("All");
  const [toDoText, setToDoText] = useState("");


  const categoryOptions = categories.map(category => {
    return <option key={category}>{category}</option>
  });

  // onSubmit={(e) => updateTaskList()}

  function handleNewTask() {
    const taskObj = {
      text : toDoText,
      category : categorySelection
    }
    onSubmitTaskHandler(taskObj);
  }

  return (
    <form className="new-task-form" onSubmit={(e) => handleNewTask()}>
      <label>
        Details
        <input type="text" name="text" value={toDoText} onChange={(e) => setToDoText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={categorySelection} onChange={(e) => setCategorySelection(e.target.value)}>
          { categoryOptions }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
