// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
  
//   measurementId: "G-39NLPKB0JM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// ------------------------------------------------------

// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6tDR12tLLRHAHZeNd2K2HoHE_f6Ah7VQ",
  authDomain: "parking-system-hackyboys.firebaseapp.com",
  projectId: "parking-system-hackyboys",
  storageBucket: "parking-system-hackyboys.firebasestorage.app",
  messagingSenderId: "751945035132",
  appId: "1:751945035132:web:db88fc2aa871f9fa9f88f9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
