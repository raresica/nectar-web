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
      nextState.addedItems = cart.addedItems
      nextState.total = cart.total
      return nextState
    }
    case 'ADD_TO_CART': {
      let product = action.payload
      const nextState = cloneDeep(state)
      if (!product.quantity) {
        product.quantity = 1
        nextState.addedItems.push(product)
        if (product.price && !isNaN(product.price)) {
          nextState.total = parseInt(nextState.total) + parseInt(product.price)
        }
      } else {
        nextState.addedItems.map(item => {
          if (item.id === product.id) {
            item.quantity++
          }
        })
        nextState.total = parseInt(nextState.total) + parseInt(product.price)
      }

      const newCart = {
        addedItems: nextState.addedItems,
        total: nextState.total
      }

      window.localStorage.setItem('cart', JSON.stringify(newCart))
      return nextState
    }
    case 'INCREMENT_PRODUCT': {
      let product = action.payload
      let nextState = cloneDeep(state)
      nextState.addedItems.map(item => {
        if (item.id === product.id) {
          item.quantity++
          nextState.total = parseInt(nextState.total) + parseInt(product.price)
        }
      })
      const newCart = {
        addedItems: nextState.addedItems,
        total: nextState.total
      }

      window.localStorage.setItem('cart', JSON.stringify(newCart))
      return nextState
    }
    case 'DECREMENT_PRODUCT': {
      let product = action.payload
      let nextState = cloneDeep(state)

      nextState.addedItems.map(item => {
        if (item.id === product.id) {
          if (item.quantity === 1) {
            nextState.addedItems.splice(nextState.addedItems.indexOf(item), 1)
          } else {
            item.quantity--
          }
          nextState.total = parseInt(nextState.total) - parseInt(product.price)
        }
      })
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
