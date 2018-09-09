import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
//
import './App.css';
import 'typeface-montserrat'
import 'typeface-roboto'
import theme from './theme'
import Header from 'displays/App/Header/Header'
import Footer from 'displays/App/Footer'
import Routes from 'pages/Routes'

class App extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Header />
            <Routes />
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
