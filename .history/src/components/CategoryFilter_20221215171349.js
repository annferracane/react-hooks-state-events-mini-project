import React from "react";

function CategoryFilter({categories, onClick}) {

  const categoryArray = categories.map(category => {
    return <button key={category} onClick={onClick}>{category}</button>
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryArray}
    </div>
  );
}

export default CategoryFilter;
