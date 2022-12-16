import React from "react";

function CategoryFilter({categories, onClick}) {

  const categoryButtons = categories.map(categoryButton => {
    if(e.target.id === categoryButton.key) {
      return <button key={categoryButton.key} id={categoryButton.key} className="selected" onClick={(e) => onClick(e)}>{categoryButton.key}</button>;
    } else {
      return <button key={categoryButton.key} id={categoryButton.key} className="" onClick={(e) => onClick(e)}>{categoryButton.key}</button>;
    }
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryArray}
    </div>
  );
}

export default CategoryFilter;
