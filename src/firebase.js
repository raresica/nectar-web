import app from 'firebase/app'
import 'firebase/firestore' // needed for side-effects
//
import config from './firebase.config'

app.initializeApp(config)
// export default app

export const database = app.firestore()

const dbSettings = { timestampsInSnapshots: true }
database.settings(dbSettings)
