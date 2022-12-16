import React from "react";

function Task({key, text, category, onDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete("test")}>X</button>
    </div>
  );
}

export default Task;
