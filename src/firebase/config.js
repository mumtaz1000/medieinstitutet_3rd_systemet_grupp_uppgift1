import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/storage'

firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: "1:683178060846:web:f965f5dec7a6f8958d43bf",
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  })

export const firestore = firebase.firestore();
export const storage = firebase.storage();


