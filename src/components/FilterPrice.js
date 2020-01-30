import React from "react"

export const FilterPrice = ({ priceStart, priceEnd, handleChange }) => {
  return (
    <div>
      <span>Цена:</span>
      <div className="my-2" style={{ width: "130px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Цена от "
          name="priceStart"
          value={priceStart || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Цена до"
          name="priceEnd"
          value={priceEnd || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
