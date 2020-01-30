import React, { useState } from "react"
import { useSelector } from "react-redux"

import { ItemsListActivity } from "../components/ItemsListActivity"
import { FilterBar } from "../components/FilterBar"

export const Main = () => {
  const [state, setState] = useState({
    data: useSelector(state => state.activity.activityData),
    allCategories: useSelector(state => state.activity.allCategories),
    selectedСategories: [],
    priceStart: "",
    priceEnd: ""
  })

  let data = [...state.data]

  if (state.selectedСategories.length) {
    data = data.filter(item =>
      findMatch(item.categories, state.selectedСategories)
    )
  }
  if (state.priceStart) {
    data = data.filter(d => Number(d.price) >= Number(state.priceStart))
  }
  if (state.priceEnd) {
    data = data.filter(d => Number(d.price) <= Number(state.priceEnd))
  }
  function findMatch(prev, next) {
    const someF = i => next.some(p => p === i)
    let isMatch = prev.some(i => someF(i))
    return isMatch
  }

  return (
    <div className="d-flex">
      <FilterBar state={state} setState={setState} data={data} />
      <ItemsListActivity items={data} />
    </div>
  )
}
