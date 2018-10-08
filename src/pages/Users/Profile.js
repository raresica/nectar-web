import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from '@material-ui/core'
//
import { signOut } from '../../data/users/actions'

const Profile = ({ currentUser, signOut }) => {
  return (
    <div>
      <h2>Welcome {currentUser.email}</h2>
      <Button onClick={signOut}>Log out</Button>
    </div>
  )
}

const mapState = state => ({
  currentUser: state.users.currentUser
})
const mapDispatch = dispatch => bindActionCreators({ signOut }, dispatch)

export default connect(
  mapState,
  mapDispatch
)(Profile)
