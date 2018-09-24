import * as usersApi from 'api/users'
import { alertUser } from 'data/app/actions'

export const signIn = (email, password) => {
  console.log('Attempting sign in with: ', email, password)
  return dispatch => {
    usersApi.signIn(email, password)
      .then(user => {
        dispatch({ type: 'SIGN_IN', payload: user })
      })
      .catch(err => {
        const action = alertUser(err.message)
        dispatch(action)
      })
  }
}

export const signUp = (email, password) => {
  console.log('Attempting sign up with: ', email, password)
  return dispatch => {
    usersApi.signUp(email, password)
      .then(user => {
        dispatch({ type: 'SIGN_UP', payload: user })
      })
  }
}
