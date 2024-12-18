import React from 'react';

const CategorySelector = ({ categories, onSelectCategory }) => {
  return (
    <div>
      <h2>Select a category:</h2>
      <select onChange={(e) => onSelectCategory(JSON.parse(e.target.value))}>
        {categories.map((category) => (
          <option key={category.id} value={JSON.stringify(category)}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
