import React from "react";

function CategoryFilter({categories, clickHandler, className}) {
  const categoryArray = categories.map(category => {
    return <button key={category} onClick={clickHandler} class={className}>{category}</button>
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryArray}
    </div>
  );
}

export default CategoryFilter;
