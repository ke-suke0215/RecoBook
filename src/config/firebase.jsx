import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC_2FhzY9Die3XkqOb9NOfLqnoxOz9SuLc",
    authDomain: "recobook-7b8e2.firebaseapp.com",
    databaseURL: "https://recobook-7b8e2.firebaseio.com",
    projectId: "recobook-7b8e2",
    storageBucket: "recobook-7b8e2.appspot.com",
    messagingSenderId: "872266827349",
    appId: "1:872266827349:web:00ed2164a7110ed2fbf6dc",
    measurementId: "G-4QFKD82MYH"
}

firebase.initializeApp(firebaseConfig)

export default firebase
export const db = firebase.firestore();