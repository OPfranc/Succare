import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBhFsDqSIbQYPraW-81aCy6eKcIpqmRDdk",
    authDomain: "succare-6b4f6.firebaseapp.com",
    databaseURL: "https://succare-6b4f6.firebaseio.com",
    projectId: "succare-6b4f6",
    storageBucket: "succare-6b4f6.appspot.com",
    messagingSenderId: "293994116796",
    appId: "1:293994116796:web:e6ca91bda92af5721bc2b9",
    measurementId: "G-F5XP4KTS69"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestore = firebaseApp.firestore()
export const auth = firebaseApp.auth()
export const currentUser = auth.currentUser
export const currentUserUid = auth.currentUser?.uid
export const authProvider = new firebase.auth.GoogleAuthProvider()