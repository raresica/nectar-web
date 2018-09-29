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
    console.log(this.props, 'Props')
    return (
      <div>
        <ShoppingList addedItems={this.props.cart.addedItems} />
      </div>
    )
  }
}

const mapState = state => {
  console.log(state,'wawawa')
  return ({
    cart: cartSelector(state)
  })
}

const mapDispatch = dispatch => bindActionCreators({ initializeCart, addProductToCart }, dispatch)

export default connect(mapState, mapDispatch)(ShoppingCart)
