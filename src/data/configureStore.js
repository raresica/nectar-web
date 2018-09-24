import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk' // TODO consider redux-sagas instead

import productsReducer from './products/reducer'
import usersReducer from './users/reducer'

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer
})

const middlewares = [
  thunk,
  logger
]

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(...middlewares))
}

export default configureStore
