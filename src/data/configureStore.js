import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk' // TODO consider redux-sagas instead

import appReducer from './app/reducer'
import productsReducer from './products/reducer'
import usersReducer from './users/reducer'
import cartReducer from './cart/reducer'

const rootReducer = combineReducers({
  app: appReducer,
  products: productsReducer,
  users: usersReducer,
  cart : cartReducer
})

const middlewares = [
  thunk,
  logger
]

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(...middlewares))
}

export default configureStore
