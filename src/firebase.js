import firebase from "firebase"

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: "dev-kani-robinhood-clone.firebaseapp.com",
  projectId: "dev-kani-robinhood-clone",
  storageBucket: "dev-kani-robinhood-clone.appspot.com",
  messagingSenderId: "946434768528",
  appId: "1:946434768528:web:341d1265a1890dc0f8a215"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export { db }