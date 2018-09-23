import { cloneDeep } from 'lodash/lang'

const initialState = {
  email: '',
  authenticated: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN': {
      return {
        ...action.payload,
        initialized: true
      }
    }

    case 'SIGN_UP': {
      const item = action.payload
      const nextState = cloneDeep(state)

      nextState.allIds.push(item.id)
      nextState.byId[item.id] = item

      return nextState
    }

    default: {
      return state
    }
  }
}

export default reducer
