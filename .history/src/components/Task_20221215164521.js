import React from "react";

function Task({text, category, onDelete}) {
  const id = category + "-" + text.split(' ').join('');

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete(id)}>X</button>
    </div>
  );
}

export default Task;
