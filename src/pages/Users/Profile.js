import React from 'react'
import { connect } from 'react-redux'

const Profile = ({ currentUser }) => (
  <div>
    <h2>Welcome {currentUser === null ? 'null' : currentUser}</h2>
  </div>
)

const mapState = state => ({
  currentUser: state.users.currentUser
})

export default connect(mapState)(Profile)
