import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
// data
import { signIn } from '../../data/users/actions'
// views
import AccountForm from '../../views/Users/AccountForm'

class SignUpPage extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom>
          Sign in
        </Typography>
        <Paper elevation={16} className={classes.paper}>
          <AccountForm onSubmit={this.props.signIn} buttonLabel="Sign in" />
        </Paper>
        <Link to="/users/sign-up">Sign up</Link>
        <Link to="/users/reset-password">Reset password</Link>
      </div>
    )
  }
}

const styles = {
  root: {
    width: 280,
    margin: '16px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  paper: {
    alignSelf: 'stretch',
    marginBottom: 24
  }
}

// inject the classes prop
const StyledPage = withStyles(styles)(SignUpPage)

// actions
const mapDispatch = dispatch => bindActionCreators({ signIn }, dispatch)
// connect the component
export default connect(
  null,
  mapDispatch
)(StyledPage)
