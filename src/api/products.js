import { firestoreInstance } from './firebase'

export function find () {
  return firestoreInstance.collection('products').get()
}

export function create (product) {
  return firestoreInstance.collection('products').add(product)
    // let's return only the newly generated id
    .then(documentReference => documentReference.id)
}
