import React from 'react'
import { withStyles } from '@material-ui/core'

class Template extends React.Component {
  render() {
    const { classes } = this.props

    return <p className={classes.root}>Template</p>
  }
}

const styles = theme => ({
  root: {
    color: theme.palette.primary[900]
  }
})

export default withStyles(styles)(Template)
