import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from 'react'
import Homepage from './screens/Homepage'
import Product from './screens/Product'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Homepage/>
        </Route>
        <Route path="/product/:productId">
          <Product/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
