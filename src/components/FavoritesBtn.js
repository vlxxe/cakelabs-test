import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  addToFavorites,
  removeFromFavorites
} from "../store/actions/activityActions"

export const FavoritesBtn = ({ id }) => {
  const favoritesIds = useSelector(state => state.activity.favoriteActivityIds)
  const dispatch = useDispatch()

  const checkOnFavorites = () => {
    return favoritesIds.some(i => i === id)
  }
  let isFavorites = checkOnFavorites()

  const styles = {
    default: {
      cursor: "ponter",
      color: isFavorites ? "red" : "initial",
      marginLeft: 5
    },
    active: {
      color: "red"
    }
  }

  const handlerFavorites = () => {
    isFavorites
      ? dispatch(removeFromFavorites(id))
      : dispatch(addToFavorites(id))
  }

  return (
    <i
      className="fa fa-heart"
      aria-hidden="true"
      style={styles.default}
      onClick={handlerFavorites}
    ></i>
  )
}
