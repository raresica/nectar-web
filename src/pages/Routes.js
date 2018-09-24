import React from 'react'
import { Route } from 'react-router-dom'
//
import Home from './Home'
import About from './About'
import ProductsPage from 'pages/Products/ProductsPage'
import UsersRoutes from './Users/Routes'

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/products" component={ProductsPage} />
    <UsersRoutes />
  </React.Fragment>
)

export default Routes
