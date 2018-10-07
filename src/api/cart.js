import { firestoreInstance } from 'api/firebase'

export function submitOrder (order) {
  return firestoreInstance.collection('orders').add(order)
    .then(documentReference => documentReference.id)
}
