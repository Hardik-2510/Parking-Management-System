import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        alert("User record not found in database");
        return;
      }

      const role = userSnap.data().role;

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

document
  .getElementById("loginBtn")
  .addEventListener("click", login);
