import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  doc, setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value; // customer / admin

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        role: role,
        createdAt: new Date()
      });

      alert("Signup successful");

      if (role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else {
        window.location.href = "customer-dashboard.html";
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}


document.getElementById('signupBtn').addEventListener("click" ,signup);