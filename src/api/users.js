import { authInstance } from 'api/firebase'

export function signUp (email, password) {
  return authInstance.createUserWithEmailAndPassword(email, password)
    .then(response => response.user.toJSON())
  //   console.log('toJSON', response.user.toJSON())
  //   // extract from the firebase response the data we need
  //   const user = {
  //     id: response.user.uid,
  //     email: response.user.email,
  //     emailVerified: response.user.emailVerified,
  //     displayName: response.user.displayName,
  //   }

  //   return user
  // })
}

export function signIn (email, password) {
  return authInstance.signInWithEmailAndPassword(email, password)
    .then(response => response.user.toJSON())
}

export function signOut () {
  return authInstance.signOut()
  // .then(function () {
  //   // Sign-out successful.
  // }).catch(function (error) {
  //   // An error happened.
  // });
}
