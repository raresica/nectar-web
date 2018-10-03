import { cloneDeep } from 'lodash/lang'

const initialState = {
  addedItems: [],
  total: 0,
  initialized: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_CART': {
      let nextState = cloneDeep(state)
      const cart = JSON.parse(action.payload)
      console.log(cart, 'carterino')
      nextState.addedItems = cart.addedItems
      nextState.total = cart.total
      return nextState
    }

    case 'ADD_TO_CART': {
      const product = action.payload
      const nextState = cloneDeep(state)
      nextState.addedItems.push(product)
      if (product.price && !isNaN(product.price)) {
        nextState.total = parseInt(state.total) + parseInt(product.price)
      }

      const newCart = {
        addedItems: nextState.addedItems,
        total: nextState.total
      }

      window.localStorage.setItem('cart', JSON.stringify(newCart))
      return nextState
    }

    default: {
      return state
    }
  }
}

export default reducer
