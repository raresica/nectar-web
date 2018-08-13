import { cloneDeep } from 'lodash/lang'

const initialState = {
  allIds: [],
  byId: {},
  initialized: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_ITEMS':
      return {
        ...action.payload,
        initialized: true
      }

    case 'ADD_ITEM':
      const item = action.payload
      const nextState = cloneDeep(state)

      nextState.allIds.push(item.id)
      nextState.byId[item.id] = item

      return nextState
    default:
      return state
  }
}

export default reducer
