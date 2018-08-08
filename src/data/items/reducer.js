const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
        }
      ]
    default:
      return state
  }
}

export default reducer
