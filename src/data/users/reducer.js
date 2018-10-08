const initialState = {
  currentUser: null,
  initialized: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
    case 'SIGN_IN': {
      return {
        currentUser: action.payload,
        initialized: true
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
