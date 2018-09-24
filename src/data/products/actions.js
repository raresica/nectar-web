import * as productsApi from 'api/products'

export const initializeProducts = () => {
  return dispatch => {
    productsApi.find()
      .then(productList => {
        const allIds = []
        const byId = {}

        productList.forEach((doc) => {
          const product = doc.data()
          product.id = doc.id

          allIds.push(product.id)
          byId[product.id] = product
        })

        dispatch({ type: 'INIT_ITEMS', payload: { allIds, byId } })
      })
  }
}

export const addProduct = (title, price) => {
  return dispatch => {
    const product = { title, price }
    productsApi.create(product)
      .then(id => {
        console.log('Document written with ID: ', id)

        product.id = id
        const action = {
          type: 'ADD_ITEM',
          payload: product
        }

        dispatch(action)
      })
      .catch(error => {
        console.error('Error adding product: ', error);
      })
  }
}
