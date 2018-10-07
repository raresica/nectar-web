import { cloneDeep } from 'lodash/lang'

const initialState = {
  allIds: [],
  byId: {},
  initialized: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_ITEMS': {
      return {
        ...action.payload,
        initialized: true
      }
    }

    case 'ADD_ITEM': {
      const product = action.payload
      const nextState = cloneDeep(state)
      nextState.allIds.push(product.id)
      nextState.byId[product.id] = product

      return nextState
    }

    default: {
      return state
    }
  }
}

export default reducer
