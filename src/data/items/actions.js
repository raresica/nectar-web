import { database } from '../../firebase'

export const initializeItems = () => {
  return dispatch => {
    database.collection('items').get().then((querySnapshot) => {
      const allIds = []
      const byId = {}

      querySnapshot.forEach((doc) => {
        const item = doc.data()
        item.id = doc.id

        allIds.push(item.id)
        byId[item.id] = item
      })

      dispatch({ type: 'INIT_ITEMS', payload: { allIds, byId } })
    })
  }
}

export const addItem = (name, price) => {
  return dispatch => {
    const item = { name, price }
    database.collection('items').add(item)
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id)

        item.id = docRef.id
        const action = {
          type: 'ADD_ITEM',
          payload: item
        }

        dispatch(action)
      })
      .catch(error => {
        console.error('Error adding item to firebase: ', error);
      })
  }
}
