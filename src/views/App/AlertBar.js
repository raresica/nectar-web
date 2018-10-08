import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
//
import { nextAlertSelector } from '../../data/app/selectors'
import { dismissAlert } from '../../data/app/actions' //TODO lets keep this component dumb

const DISMISS_BUTTON_LABEL = 'DISMISS'
const AUTO_HIDE_DURATION = 2000

class AlertBar extends React.Component {
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.props.dismissAlert()
  }

  render() {
    const { classes, nextAlert } = this.props

    if (nextAlert !== null) {
      // dismiss the alert after timeout
      setTimeout(this.props.dismissAlert, AUTO_HIDE_DURATION)
    }

    return (
      <Snackbar
        open={nextAlert !== null}
        className={classes.snack}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        ContentProps={{ 'aria-describedby': 'snack-alert' }}
        message={<span id="snack-alert">{nextAlert}</span>}
        onClose={this.handleClose}
        action={[
          <Button key="dismiss" color="secondary" size="small" onClick={this.handleClose}>
            {DISMISS_BUTTON_LABEL}
          </Button>
        ]}
      />
    )
  }
}

const styles = {
  snack: {
    // this should be above the navigation bar
    bottom: 56
  }
}

const StyledBar = withStyles(styles)(AlertBar)

const mapState = state => ({
  nextAlert: nextAlertSelector(state)
})

const mapDispatch = dispatch => bindActionCreators({ dismissAlert }, dispatch)

export default connect(
  mapState,
  mapDispatch
)(StyledBar)
