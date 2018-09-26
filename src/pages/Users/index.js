import React from 'react'
import { Route } from 'react-router-dom'
//
import AuthenticatedRoute from 'views/App/AuthenticatedRoute'
import SignUpPage from 'pages/Users/SignUp'
import SignInPage from 'pages/Users/SignIn'
import ProfilePage from 'pages/Users/Profile'

const Users = () => (
  <React.Fragment>
    <AuthenticatedRoute path="/users/profile" component={ProfilePage} />
    <Route path="/users/sign-in" component={SignInPage} />
    <Route path="/users/sign-up" component={SignUpPage} />
    <Route path="/users/reset-password" component={() => <p>Not implemented</p>} />
  </React.Fragment>
)

export default Users
