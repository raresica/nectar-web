import * as itemsApi from 'api/items'

export const initializeItems = () => {
  return dispatch => {
    itemsApi.find()
      .then(itemList => {
        const allIds = []
        const byId = {}

        itemList.forEach((doc) => {
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
    itemsApi.create(item)
      .then(id => {
        console.log('Document written with ID: ', id)

        item.id = id
        const action = {
          type: 'ADD_ITEM',
          payload: item
        }

        dispatch(action)
      })
      .catch(error => {
        console.error('Error adding item: ', error);
      })
  }
}
