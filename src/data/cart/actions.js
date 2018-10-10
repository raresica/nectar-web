export const initializeCart = () => {
  return dispatch => {
    const localStorage = window.localStorage
    if (localStorage.cart) {
      const initialCart = localStorage.cart
      dispatch({ type: 'INIT_CART', payload: initialCart })
    }
  }
}

export const addProductToCart = productId => {
  return (dispatch, getStore) => {
    const product = getStore().products.byId[productId]
    console.log(product)
    try {
      const action = {
        type: 'ADD_TO_CART',
        payload: product
      }

      dispatch(action)
    } catch (err) {
      console.error('Error adding product: ', err)
    }
  }
}

export const incrementProduct = product => {
  return dispatch => {
    try {
      const action = {
        type: 'INCREMENT_PRODUCT',
        payload: product
      }

      dispatch(action)
    } catch (err) {
      console.error('Error incrementing product: ', err)
    }
  }
}
export const decrementProduct = product => {
  return dispatch => {
    try {
      const action = {
        type: 'DECREMENT_PRODUCT',
        payload: product
      }
      dispatch(action)
    } catch (err) {
      console.error('Error decrementing product: ', err)
    }
  }
}
