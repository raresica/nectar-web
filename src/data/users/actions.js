import * as usersApi from 'api/users'

export const signIn = (email, password) => {
  console.log('Attempting sign in with: ', email, password)
  return dispatch => {
    usersApi.signIn(email, password)
      .then(user => {
        dispatch({ type: 'SIGN_IN', payload: user })
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
