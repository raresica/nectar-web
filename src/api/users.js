import { authInstance } from './firebase'

export function signUp(email, password) {
  return authInstance
    .createUserWithEmailAndPassword(email, password)
    .then(response => response.user.toJSON())
}

export function signIn(email, password) {
  return authInstance
    .signInWithEmailAndPassword(email, password)
    .then(response => response.user.toJSON())
}

export function signOut() {
  return authInstance.signOut()
}
