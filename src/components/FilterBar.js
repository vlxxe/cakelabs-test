import React from "react"

import { FilterPrice } from "./FilterPrice"
import { FilterCategoryActivity } from "./FilterCategoryActivity"

export const FilterBar = ({ state, setState, searchTerm }) => {
  const handleChange = e => {
    let name = e.target.name || "selectedСategories"
    let value = e.target.value || e.target.htmlFor
    if (name === "selectedСategories") {
      let newCata = [...state.selectedСategories]
      if (newCata.indexOf(value) >= 0) {
        newCata.splice(newCata.indexOf(value), 1)
      } else {
        newCata.push(value)
      }
      return setState(prev => ({ ...prev, [name]: newCata }))
    }
    setState(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="d-flex flex-column">
      <FilterPrice
        priceStart={state.priceStart}
        priceEnd={state.priceEnd}
        state={state}
        handleChange={handleChange}
      />
      <FilterCategoryActivity
        selectedСategories={state.selectedСategories}
        allCategories={state.allCategories}
        handleChange={handleChange}
      />
    </div>
  )
}
