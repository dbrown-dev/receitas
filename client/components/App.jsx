import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import DisplayRecipes from './DisplayRecipes'
import RecipeDetails from './RecipeDetails'
import Error404 from "./Error404";

const App = () => {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" exact component={DisplayRecipes} />
        <Route path="/recipe/:id"  component={RecipeDetails} />
        <Route component={Error404} />
      </Switch>
    </div>
</Router>
  )
}

export default App
