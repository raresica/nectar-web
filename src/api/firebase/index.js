import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
//
import connectionConfig from './connection.config'
import firestoreConfig from './firestore.config'

// Establish connection to firebase
app.initializeApp(connectionConfig)

// Setup Firestore
export const firestoreInstance = app.firestore()
firestoreInstance.settings(firestoreConfig)

// Setup Auth
export const authInstance = app.auth()
