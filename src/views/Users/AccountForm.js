import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

class AccountForm extends React.Component {
  handleFormSubmit = event => {
    // prevent the form from submitting (this will trigger a refresh of the page)
    event.preventDefault()
    // extract the values from the form
    const form = event.target
    const data = {
      email: form['email-input'].value,
      password: form['password-input'].value
    }
    // TODO compare password
    // passwordConfirmation: form['password-confirmation-input'].value,

    // pass the data to the parent
    this.props.onSubmit(data.email, data.password)
  }

  render() {
    const { classes, withConfirmation, buttonLabel } = this.props

    return (
      <form className={classes.form} onSubmit={this.handleFormSubmit}>
        <Grid container spacing={24} direction="column">
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email-input" // TODO: check if it autocompletes with the email
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="password-input" label="Password" type="password" />
          </Grid>
          {withConfirmation && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password-confirmation-input"
                label="Password confirmation"
                type="password"
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <Button variant="outlined" color="primary" fullWidth type="submit">
              {buttonLabel}
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

const styles = {
  form: {
    padding: 16
  }
}

export default withStyles(styles)(AccountForm)
