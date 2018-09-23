const initialState = {
  currentUser: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
    case 'SIGN_IN': {
      return {
        currentUser: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
