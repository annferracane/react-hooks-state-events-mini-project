import React from "react";


function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleDeleteTask(text) {
    setTasks(tasks.filter(task => task.text !== text))
  }

  const filteredTasks = tasks.filter(task => 
    selectedCategory === "All" || task.category === selectedCategory
  )

  function onTaskFormSubmit(details, category) {
    let newTask = {text: details, category: category}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectedCategory={setSelectedCategory}/>
      <NewTaskForm categories={categories.filter(category => category !== "All")} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;