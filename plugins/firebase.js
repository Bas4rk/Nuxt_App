import firebase from 'firebase'
import 'firebase/firestore'
const config = {
     apiKey: "AIzaSyD4v77P0S1CoG9LfdGyaDsQY365wrLwFWs",
    authDomain: "helical-glass-242701.firebaseapp.com",
    databaseURL: "https://helical-glass-242701.firebaseio.com",
    projectId: "helical-glass-242701",
    storageBucket: "helical-glass-242701.appspot.com",
    messagingSenderId: "128124658692",
    appId: "1:128124658692:web:3c45b23a2a1674b656c151"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

//export default firebase
export default (context, inject) => {
  inject('firebase', firebase)
  inject('firestore', firebase.firestore())
	inject('auth', firebase.auth())
}
