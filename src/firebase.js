import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'

const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  databaseURL: process.env.FB_DATABASE_URL
}

firebase.initializeApp(config)

const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })

const functions = firebase.functions()

export const db = firestore

export const fn = functions
