import React from "react"
import { useSelector } from "react-redux"
import { ItemsListActivity } from "../components/ItemsListActivity"

export const Favorites = () => {
  const favoritesIds = useSelector(state => state.activity.favoriteActivityIds)
  const findMatchId = id => {
    return favoritesIds.find(i => i === id)
  }
  const activityData = useSelector(state =>
    state.activity.activityData.filter(item => findMatchId(item.id))
  )

  return (
    <div>
      {activityData.length ? (
        <ItemsListActivity items={activityData} />
      ) : (
        <h2 className="text-center">У вас нет избранных мероприятий :(</h2>
      )}
    </div>
  )
}
