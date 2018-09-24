import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// data
import { initializeProducts, addProduct } from 'data/products/actions'
import { productsSelector } from 'data/products/selectors'
// views
import ProductList from 'views/Products/ProductList'

class ProductsPage extends React.Component {
  componentDidMount () {
    this.props.initializeProducts()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const title = event.target['title'].value
    const price = event.target['price'].value
    this.props.addProduct(title, price)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='title'>
            Title:
          <input name='title' />
          </label>
          <label htmlFor='price'>
            Price:
          <input type='number' name='price' />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <ProductList products={this.props.products} />
      </div>
    )
  }
}

const mapState = state => ({
  products: productsSelector(state)
})

const mapDispatch = dispatch => bindActionCreators({ initializeProducts, addProduct }, dispatch)

export default connect(mapState, mapDispatch)(ProductsPage)
