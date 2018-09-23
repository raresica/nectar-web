import React from 'react'
import { Route } from 'react-router-dom'
//
import Home from './Home'
import About from './About'
import ItemsPage from 'pages/Items/ItemsPage'
import SignUpPage from 'pages/Users/SignUp'
import SignInPage from 'pages/Users/SignIn'

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route path="/users/sign-in" component={SignInPage} />
    <Route path="/users/sign-up" component={SignUpPage} />
    <Route path="/users/reset-password" component={() => <p>Not implemented</p>} />
    <Route path="/about" component={About} />
    <Route path="/items" component={ItemsPage} />
  </React.Fragment>
)

export default Routes
