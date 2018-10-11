import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//
import { initializeProducts, addProduct } from '../../data/products/actions'
import { productsSelector } from '../../data/products/selectors'
import { addProductToCart } from '../../data/cart/actions'
import ProductList from '../../views/Products/ProductList'

class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.initializeProducts()
  }

  handleSubmit = event => {
    event.preventDefault()
    const title = event.target.title.value
    const price = event.target.price.value
    this.props.addProduct(title, price)
  }
  render() {
    return (
      <div>
        <ProductList onProductAdd={this.props.addProductToCart} products={this.props.products} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title:
            <input name="title" />
          </label>
          <label htmlFor="price">
            Price:
            <input type="number" name="price" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapState = state => ({
  products: productsSelector(state)
})

const mapDispatch = dispatch =>
  bindActionCreators({ initializeProducts, addProduct, addProductToCart }, dispatch)

export default connect(
  mapState,
  mapDispatch
)(ProductsPage)
