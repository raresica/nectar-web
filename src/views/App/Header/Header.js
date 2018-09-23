import React from 'react'
import { connect } from 'react-redux'
//
import logo from './assets/logo.svg'

const Header = ({ authenticated }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome</h1>
    {
      authenticated
        ? 'You are logged in'
        : 'You are not logged in'
    }
  </header>
)

// data from redux
const mapState = state => ({
  authenticated: state.users.authenticated
})

export default connect(mapState)(Header)
