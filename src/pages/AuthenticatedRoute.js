import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let AuthGuard = ({ authenticated, children: Component }) =>
  authenticated ? <Component /> : <Redirect to="/users/sign-in" />

const mapState = state => ({
  authenticated: !!state.users.currentUser
})

AuthGuard = connect(mapState)(AuthGuard)

const AuthenticatedRoute = ({ component, ...rest }) => (
  <Route {...rest} render={() => <AuthGuard>{component}</AuthGuard>} />
)

export default AuthenticatedRoute
