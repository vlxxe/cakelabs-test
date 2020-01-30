import React from "react"
import { NavLink } from "react-router-dom"
import { FavoritesBtn } from "./FavoritesBtn"

export const ItemsListActivity = ({ items }) => {
  return (
    <div className="rounded d-flex justify-content-start flex-wrap px-2">
      {items.map(item => {
        return (
          <div className="card mb-2" style={{ width: 380 }} key={item.id}>
            <NavLink to={`/activity/${item.id}`}>
              <img
                className="card-img-top"
                src="/img/cardImage.svg"
                alt={item.slug}
              />
            </NavLink>

            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                {item.title}
                <FavoritesBtn id={item.id} />
              </h5>

              <p className="card-text">
                {item.description.substring(0, 200)}...
              </p>

              <div className="d-flex align-items-end justify-content-between mt-auto">
                <div>
                  <NavLink to={`/activity/${item.id}`}>
                    <button type="button" className="btn btn-primary">
                      Подробнее
                    </button>
                  </NavLink>
                </div>

                {item.price && (
                  <span className="card-text">Цена: {item.price}р</span>
                )}
                {item.is_free && (
                  <span className="badge badge-success">Бесплатно</span>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
