import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.NEXT_APP_API_KEY,
  authDomain: process.env.NEXT_APP_AUTH_DOMAIN,
  projectId: process.env.NEXT_APP_PROJECT_ID,
  storageBucket: process.env.NEXT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_APP_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_APP_ID
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
