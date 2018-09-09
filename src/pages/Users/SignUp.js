import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
//
import AccountForm from 'displays/Users/AccountForm'


const handleSignUp = (data) => {
  console.log(data)
}

const SignUp = ({ classes }) => (
  <Paper elevation={24} className={classes.paper}>
    <AccountForm
      onSubmit={handleSignUp}
    />
  </Paper>
)

const styles = {
  paper: {
    width: 280,
    margin: '16px auto',
    padding: 16
  }
}

export default withStyles(styles)(SignUp)
