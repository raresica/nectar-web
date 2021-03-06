import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
// import orange from '@material-ui/core/colors/orange'
import 'typeface-montserrat'
import 'typeface-roboto'

/**
 * Override the default material-ui theme:
 * https://material-ui.com/customization/default-theme/
 */
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: purple
    // secondary: orange
  }
})

export default theme
