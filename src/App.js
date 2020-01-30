import React from "react"
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom"

import { Main } from "./pages/Main"
import { FullInfoActivity } from "./components/FullInfoActivity"
import { Favorites } from "./pages/Favorites"

function App() {
  return (
    <BrowserRouter>
      <div className="col-lg-9 mx-auto">
        <div className="d-flex justify-content-between">
          <NavLink to="/">
            <h2>Главная</h2>
          </NavLink>
          <NavLink to="/favorites">
            <h2>Избранное</h2>
          </NavLink>
        </div>

        <Switch>
          <Route path="/" exact component={Main} /> />
          <Route
            path="/activity/:id"
            render={({ match }) => {
              const { id } = match.params
              return <FullInfoActivity itemId={Number(id)} />
            }}
          />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
