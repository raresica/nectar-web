import { authInstance } from 'api/firebase'

export function signUp (email, password) {
  return authInstance.createUserWithEmailAndPassword(email, password)
}

export function signIn (email, password) {
  return authInstance.signInWithEmailAndPassword(email, password)
    .then(response => response.user)
  // .then(response => {
  //   //displayName
  //   //       email: "unverified@user.com"
  //   // emailVerified: false
  // })
}

export function signOut () {
  return authInstance.signOut()
  // .then(function () {
  //   // Sign-out successful.
  // }).catch(function (error) {
  //   // An error happened.
  // });
}
