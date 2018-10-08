import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
//
import { initializeUser } from '../../data/users/actions'
import AuthenticatedRoute from '../AuthenticatedRoute'
import GuestRoute from '../GuestRoute'
import SignUpPage from './SignUp'
import SignInPage from './SignIn'
import ProfilePage from './Profile'

class Users extends React.Component {
  componentDidMount() {
    this.props.initializeUser()
  }

  render() {
    if (!this.props.initialized) return 'Loading...'

    return (
      <React.Fragment>
        <AuthenticatedRoute path="/users/profile" component={ProfilePage} />
        <GuestRoute path="/users/sign-in" component={SignInPage} />
        <GuestRoute path="/users/sign-up" component={SignUpPage} />
        <GuestRoute path="/users/reset-password" component={() => <p>Not implemented</p>} />
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  initialized: state.users.initialized
})

const mapDispatch = dispatch => bindActionCreators({ initializeUser }, dispatch)

/**
 * Wrap with router to fix this bug:
 * https://reacttraining.com/react-router/core/guides/redux-integration/blocked-updates
 */
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Users)
)
