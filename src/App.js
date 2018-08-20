import React from 'react'
import { ThemeProvider } from 'styled-components'
//
import './App.css';
import 'typeface-montserrat'
import 'typeface-roboto'
import logo from './logo.svg'
import ItemsPage from './pages/Items/ItemsPage'
import theme from './theme'

class App extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <ItemsPage />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
