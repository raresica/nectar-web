import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk' // TODO consider redux-sagas instead

import itemsReducer from './items/reducer'
// import usersReducer from './users/reducer'

const rootReducer = combineReducers({
  items: itemsReducer
  // users: usersReducer
})

const middlewares = [
  thunk,
  logger
]

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(...middlewares))
}

export default configureStore
