import { firestoreInstance } from 'api/firebase'

export function find () {
  return firestoreInstance.collection('shopping-cart').get()
}

export function create (item) {
  return firestoreInstance.collection('shopping-cart').add(item)
    .then(documentReference => documentReference.id)
}
