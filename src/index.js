import 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import configureStore from './data/configureStore'
import registerServiceWorker from './registerServiceWorker';

const dataStore = configureStore()

const rootElement = document.getElementById('root')

render(
  <Provider store={dataStore}>
    <App />
  </Provider>,
  rootElement);

registerServiceWorker();
