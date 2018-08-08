import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBS7q86hPyaevNGbrPVwE-yIKCh4JXBQ8I",
    authDomain: "nectar-86b64.firebaseapp.com",
    databaseURL: "https://nectar-86b64.firebaseio.com",
    projectId: "nectar-86b64",
    storageBucket: "nectar-86b64.appspot.com",
    messagingSenderId: "151176076559"
}
firebase.initializeApp(config)

export default firebase