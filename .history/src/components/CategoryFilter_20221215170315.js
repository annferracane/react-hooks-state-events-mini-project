import React from "react";

function CategoryFilter({categories, clickHandler}) {
  const categoryArray = categories.map(category => {
    return <button key={category} onClick={clickHandler}>{category} class={class}</button>
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryArray}
    </div>
  );
}

export default CategoryFilter;
