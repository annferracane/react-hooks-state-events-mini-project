import React, {useState} from "react";


function NewTaskForm({categories}) {
  const [categorySelection, setCategorySelection] = useState("All");
  const [toDoText, setToDoText] = useState("");


  const categoryOptions = categories.map(category => {
    return <option key={category}>{category}</option>
  });

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={toDoText} onChange={(e) => setToDoText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={categorySelection} >
          { categoryOptions }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
