import React from "react"

export const FilterCategoryActivity = ({
  selectedСategories,
  handleChange,
  allCategories
}) => {
  return (
    <div>
      {allCategories.map(category => (
        <div className="custom-control custom-checkbox" key={category.slug}>
          <input
            className="custom-control-input"
            type="checkbox"
            id={category.slug}
            value={category.slug}
            onChange={handleChange}
            checked={selectedСategories.some(i => i === category.slug)}
          />
          <label className="custom-control-label" htmlFor={category.slug}>
            {category.name}
          </label>
        </div>
      ))}
    </div>
  )
}
