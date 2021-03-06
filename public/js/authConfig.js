// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_1JiA2IifBGzjqKVv8js-csmXKRFjY6Q",
  authDomain: "auth-me-be9eb.firebaseapp.com",
  databaseURL: "https://auth-me-be9eb.firebaseio.com",
  projectId: "auth-me-be9eb",
  appId: "1:554755859635:web:a80238a45bf332f51b7cc6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Setting Persistence ?
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

// Initialize Auth & DB
const auth = firebase.auth();
const db = firebase.firestore();

console.log(auth);
console.log(db);
