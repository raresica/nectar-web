import React from 'react'
import { Route } from 'react-router-dom'
//
import SignUpPage from 'pages/Users/SignUp'
import SignInPage from 'pages/Users/SignIn'
import ProfilePage from 'pages/Users/Profile'

const Welcome = () => (
  <React.Fragment>
    <Route path="/users/profile" component={ProfilePage} />
    <Route path="/users/sign-in" component={SignInPage} />
    <Route path="/users/sign-up" component={SignUpPage} />
    <Route path="/users/reset-password" component={() => <p>Not implemented</p>} />
  </React.Fragment>
)

export default Welcome
