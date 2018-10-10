import React from 'react'
import {
  withStyles,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <AppBar color="default" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit">
            This is app
          </Typography>
          <IconButton component={Link} to="/users/profile">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

const styles = theme => ({
  root: {
    // color: theme.palette.primary[500],
    backgroundColor: theme.palette.common.white,
    boxShadow: 'none'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

export default withStyles(styles)(Header)
