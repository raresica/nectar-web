import React from 'react'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
//
import theme from './views/theme'
import AlertBar from './views/App/AlertBar'
import Footer from './views/App/Footer'
import Routes from './pages/Routes'

class App extends React.Component {
  render () {
    const { classes } = this.props
    // style the body element
    document.body.className = classes.prettyBody

    return (
      <React.Fragment>
        {/* normalize css across browsers */}
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Router>
            <div className={classes.app}>
              <Routes />
              <AlertBar />
              <Footer />
            </div>
          </Router>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

const styles = {
  prettyBody: {
    backgroundColor: theme.palette.primary[100],
    fontFamily: theme.typography.fontFamily
  },
  app: {
    overflow: 'hidden'
  }
}

export default withStyles(styles)(App)
