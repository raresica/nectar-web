import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// data
import { initializeCart, addProductToCart } from 'data/cart/actions'
import { cartSelector } from 'data/cart/selectors'
// views
import ShoppingList from 'views/ShoppingCart/ShoppingList'

class ShoppingCart extends React.Component {
  componentDidMount() {
    this.props.initializeCart()
  }

  handleAdd = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <ShoppingList total={this.props.cart.total} addedItems={this.props.cart.addedItems} />
      </div>
    )
  }
}

const mapState = state => {
  return ({
    cart: cartSelector(state)
  })
}
const mapDispatch = dispatch => bindActionCreators({ initializeCart, addProductToCart }, dispatch)

export default connect(mapState, mapDispatch)(ShoppingCart)
