import React from "react";

function Task({text, category, id, onDelete}) {
  const id = category + "-" + text.split(' ').join('');

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;
