import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let GuestGuard = ({ authenticated, children: Component }) =>
  !authenticated ? <Component /> : <Redirect to="/users/profile" />

const mapState = state => ({
  authenticated: !!state.users.currentUser
})

GuestGuard = connect(mapState)(GuestGuard)

const GuestRoute = ({ component, ...rest }) => (
  <Route {...rest} render={() => <GuestGuard>{component}</GuestGuard>} />
)

export default GuestRoute
