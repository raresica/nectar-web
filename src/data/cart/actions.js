import * as cartApi from 'api/cart.js'

export const initializeCart = () => {
  return dispatch => {
    const localStorage = window.localStorage
    if (localStorage.cart) {
      const initialCart = localStorage.cart
      dispatch({ type: 'INIT_CART', payload: initialCart })
    }
  }
}

export const addProductToCart = (product) => {
  return dispatch => {
    try {
      const action = {
        type: 'ADD_TO_CART',
        payload: product
      }

      dispatch(action)
    } catch (err) {
      error => {
        console.error('Error adding product: ', error);
      }
    }
  }
}
