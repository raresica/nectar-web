import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import UserIcon from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ListIcon from '@material-ui/icons/List'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

class Footer extends React.Component {
  handleChange = (event, value) => {
    this.props.history.push(value)
  }

  render () {
    const { classes, location } = this.props

    return (
      <div className={classes.root}>
        <BottomNavigation value={location.pathname} onChange={this.handleChange} showLabels>
          <BottomNavigationAction label='Products' value='/products' icon={<ListIcon />} />
          <BottomNavigationAction label='Places' value='/' icon={<HomeIcon />} />
          <BottomNavigationAction label='Notifications' value='/about' icon={<NotificationsIcon />} />
          <BottomNavigationAction label='Profile' value='/users/profile' icon={<UserIcon />} />
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
    backgroundColor: '#F5F5F5',
    // this should go above the snackbar
    zIndex: 1450,
  }
}

const StyledFooter = withStyles(styles)(Footer)

export default withRouter(StyledFooter)
