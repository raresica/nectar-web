import React from 'react'
import { Route } from 'react-router-dom'
//
import AuthenticatedRoute from '../AuthenticatedRoute'
import SignUpPage from './SignUp'
import SignInPage from './SignIn'
import ProfilePage from './Profile'

const Users = () => (
  <React.Fragment>
    <AuthenticatedRoute path="/users/profile" component={ProfilePage} />
    <Route path="/users/sign-in" component={SignInPage} />
    <Route path="/users/sign-up" component={SignUpPage} />
    <Route path="/users/reset-password" component={() => <p>Not implemented</p>} />
  </React.Fragment>
)

export default Users
