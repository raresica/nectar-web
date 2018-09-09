import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const AccountForm = ({ onSubmit }) => (
  <form>
    <Grid container spacing={0} direction='column'>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="name"
          label="Name"
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="email"
          label="Email"
          margin="normal"
          />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="password"
          type='password'
          label="Password"
          margin="normal"
          />
      </Grid>
      <Grid item xs={12}>
        <TextField
          margin="normal"
          fullWidth
          id="password-confirmation"
          label="Password confirmation"
          type='password'
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant='outlined' color='primary' fullWidth>Sign up</Button>
      </Grid>
    </Grid>
  </form>
)

export default AccountForm
