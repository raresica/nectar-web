import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import UserIcon from '@material-ui/icons/AccountCircle'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ListIcon from '@material-ui/icons/List'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentLocation: props.location.pathname
    }
  }

  handleChange = (event, value) => {
    this.props.history.push(value)
    this.setState({ currentLocation: value })
  }

  render () {
    const { classes } = this.props
    const { currentLocation } = this.state

    return (
      <div className={classes.root}>
        <BottomNavigation value={currentLocation} onChange={this.handleChange} showLabels>
          <BottomNavigationAction label='Home' value='/' icon={<HomeIcon />} />
          <BottomNavigationAction label='Sign in' value='/users/sign-in' icon={<UserIcon />} />
          <BottomNavigationAction label='Sign up' value='/users/sign-up' icon={<UserIcon />} />
          <BottomNavigationAction label='About' value='/about' icon={<FavoriteIcon />} />
          <BottomNavigationAction label='Items' value='/items' icon={<ListIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}

const styles = {
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#F5F5F5'
  }
}

const StyledFooter = withStyles(styles)(Footer)

export default withRouter(StyledFooter)
