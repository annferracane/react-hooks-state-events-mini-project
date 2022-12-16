import React from "react";

function CategoryFilter({categoryArray}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryArray}
    </div>
  );
}

export default CategoryFilter;
