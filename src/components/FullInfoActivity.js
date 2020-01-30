import React from "react"
import { useSelector } from "react-redux"
import { FavoritesBtn } from "./FavoritesBtn"

export const FullInfoActivity = ({ itemId }) => {
  const item = useSelector(state =>
    state.activity.activityData.find(i => i.id === itemId)
  )

  if (!item) {
    return <div>Нету такого мероприятия!</div>
  }

  return (
    <>
      <div className="">
        <h2 className="text-left">
          {item.title}
          <FavoritesBtn id={item.id} />
        </h2>
        <div className="card">
          <img
            style={{ height: "400px" }}
            className="card-img-top"
            src="/img/cardImage.svg"
            alt={item.slug}
          />
          <div className="card-body">
            <h5 className="card-title">{item.description}</h5>
            <p className="card-text">{item.body}</p>
            <p className="card-text">
              {item.price && (
                <span className="card-text">Цена: {item.price}р</span>
              )}
              {item.is_free && (
                <span className="badge badge-success">Бесплатно</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
