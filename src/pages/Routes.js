import React from 'react'
import { Route } from 'react-router-dom'
//
import Home from './Home'
import About from './About'
import ItemsPage from 'pages/Items/ItemsPage'
import SignUp from 'pages/Users/SignUp'

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/about" component={About} />
    <Route path="/items" component={ItemsPage} />
  </React.Fragment>
)

export default Routes
