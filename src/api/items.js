import { firestoreInstance } from 'api/firebase'

export function find () {
  return firestoreInstance.collection('items').get()
}

export function create (item) {
  return firestoreInstance.collection('items').add(item)
    // let's return only the newly generated id
    .then(documentReference => documentReference.id)
}
