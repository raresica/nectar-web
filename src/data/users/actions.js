import * as usersApi from 'api/users'

export const signIn = (email, password) => {
  console.log('Attempting sign in with: ', email, password)
  return dispatch => {
    usersApi.signIn(email, password)
      .then(reply => {

        console.log('signInReply', reply)

        // dispatch({ type: 'INIT_ITEMS', payload: { allIds, byId } })
      })
  }
}

export const signUp = (email, password) => {
  console.log('Attempting sign up with: ', email, password)
  return dispatch => {
    usersApi.signUp(email, password)
      .then(reply => {

        console.log('signUpReply', reply)

        // dispatch({ type: 'INIT_ITEMS', payload: { allIds, byId } })
      })
  }
}
