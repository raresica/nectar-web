import { createStore, combineReducers } from 'redux'
import itemsReducer from './items/reducer'
// import usersReducer from './users/reducer'

const rootReducer = combineReducers({
  items: itemsReducer
  // users: usersReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore
