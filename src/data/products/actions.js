import * as productsApi from '../../api/products'
import { alertUser } from '../app/actions'
import { log } from '../../utils'

// interface Product {
//   description: String;
//   id: String;
//   // kitchenId: DocumentReference { _key: DocumentKey, firestore: Firestore, _firestoreClient: FirestoreClient }
//   price: Number;
//   title: String;
// }

export const initializeProducts = () => {
  return dispatch => {
    productsApi
      .find()
      .then(productList => {
        const allIds = []
        const byId = {}

        productList.forEach(doc => {
          const product = doc.data()
          product.id = doc.id

          allIds.push(product.id)
          byId[product.id] = product
        })

        dispatch({ type: 'INIT_ITEMS', payload: { allIds, byId } })
      })
      .catch(err => dispatch(alertUser(err.message)))
  }
}

/**
 *
 * @param {string} title
 * @param {number} price
 */
export const addProduct = (title, price) => {
  return dispatch => {
    const product = { title, price }
    productsApi
      .create(product)
      .then(id => {
        log('Document written with ID: ', id)

        product.id = id
        const action = {
          type: 'ADD_ITEM',
          payload: product
        }

        dispatch(action)
      })
      .catch(err => dispatch(alertUser(err.message)))
  }
}
