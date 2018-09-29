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
      const cart = action.payload
      nextState.addedItems = cart.addedItems
      nextState.total = cart.total
      return nextState
      // return {
      //   ...action.payload,
      //   initialized: true
      // }
    }

    case 'ADD_TO_CART': {
      const product = action.payload
      const nextState = cloneDeep(state)
      console.log(nextState,'next Statteee')
      nextState.addedItems.push(product)
      window.localStorage.setItem('cart' , JSON.stringify(nextState.addedItems))
      if (product.price && !isNaN(product.price)) {
        nextState.total = parseInt(state.total) + parseInt(product.price)
        window.localStorage.setItem('total' , parseInt(nextState.total))
      }

      return nextState
    }

    default: {
      return state
    }
  }
}

export default reducer
