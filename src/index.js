import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//
import App from './App'
import configureStore from './data/configureStore'

const dataStore = configureStore()
const rootElement = document.getElementById('root')

const render = Component => {
  ReactDOM.render(
    <Provider store={dataStore}>
      <Component />
    </Provider>,
    rootElement
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}
