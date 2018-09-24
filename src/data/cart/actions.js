import * as cartApi from 'api/cart.js'

export const initializeCart = () => {
  return dispatch => {
    cartApi.find()
      .then(
        dispatch({ type: 'INIT_CART'})
      )
  }
}

export const addProductToCart = (title, price, quantity) => {
  return dispatch => {
    const addedProduct = { title, price, quantity }
    cartApi.create(addedProduct)
      .then(id => {

        // search to see if already added and increment +1 on quantity
        console.log('Document written with ID: ', id)

        addedProduct.id = id
        const action = {
          type: 'ADD_TO_CART',
          payload: addedProduct
        }

        dispatch(action)
      })
      .catch(error => {
        console.error('Error adding product: ', error);
      })
  }
}
