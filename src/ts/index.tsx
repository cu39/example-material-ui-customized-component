import * as React from 'react'
import ReactDOM from 'react-dom'
import {cyan} from '@material-ui/core/colors'
import {CssBaseline, NoSsr} from '@material-ui/core'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: cyan,
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <NoSsr>
      <CssBaseline />
      <App />
    </NoSsr>
  </MuiThemeProvider>,
  document.getElementById('root')
)
