import * as usersApi from '../../api/users'
import { alertUser } from '../app/actions'
import { log } from '../../utils'

export const signIn = (email, password) => {
  log('Attempting sign in with: ', email, password)
  return dispatch => {
    usersApi
      .signIn(email, password)
      .then(user => {
        dispatch({ type: 'SIGN_IN', payload: user })
        localStorage.setItem('users.currentUser', JSON.stringify(user))
      })
      .catch(err => dispatch(alertUser(err.message)))
  }
}

export const signUp = (email, password) => {
  log('Attempting sign up with: ', email, password)
  return dispatch => {
    usersApi
      .signUp(email, password)
      .then(user => {
        dispatch({ type: 'SIGN_UP', payload: user })
      })
      .catch(err => dispatch(alertUser(err.message)))
  }
}

export const initializeUser = () => {
  log('Attempting to retrieve user from localStorage')
  return dispatch => {
    const user = JSON.parse(localStorage.getItem('users.currentUser'))

    dispatch({ type: 'SIGN_IN', payload: user })
  }
}

export const signOut = () => {
  log('Attempting to sign out user')
  return dispatch => {
    localStorage.setItem('users.currentUser', null)
    dispatch({ type: 'SIGN_IN', payload: null })
  }
}
