// config.js
// Firebase initialization and exports.
// Place this file in the same directory as 6.html and open 6.html in a browser (type=module).

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

/*
  Your Firebase config.
  This is the config you provided earlier.
  If you want to change project, update these values.
*/
const firebaseConfig = {
  apiKey: "AIzaSyAq2SLz4bvv4adWRr4HoO3N8AUvRgofhTU",
  authDomain: "busmate-77faa.firebaseapp.com",
  databaseURL: "https://busmate-77faa-default-rtdb.firebaseio.com",
  projectId: "busmate-77faa",
  storageBucket: "busmate-77faa.firebasestorage.app",
  messagingSenderId: "297223555070",
  appId: "1:297223555070:web:0b8a51ea3e0005bb8d62af",
  measurementId: "G-Y8QNLRPKRM"
};

// Initialize Firebase app and Realtime Database
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export so the main HTML module can import them
export { app, db, firebaseConfig };
