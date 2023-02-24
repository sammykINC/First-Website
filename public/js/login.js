// const btn = document.querySelector("#login");
// btn.addEventListener("click", () => {
//  window.alert("You have successfully logged in!");
// })

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFNxYlLhsuMZ2CDkYzehLrrld7Otgbguc",
  authDomain: "sammyk-inc.firebaseapp.com",
  projectId: "sammyk-inc",
  storageBucket: "sammyk-inc.appspot.com",
  messagingSenderId: "816489026486",
  appId: "1:816489026486:web:722dcaf021373b10306717",
  measurementId: "G-XRNJ7XBBTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Auth state
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    const uid = user.uid;
    console.log('user has signed in');
    window.location.replace('index.html')
  } else {
    console.log('No user');
  }
});


// LOGIN FORM

// getting all the objecst of html
var email = document.getElementById("email")
var password = document.getElementById("password")

window.login = function(e) {
 e.preventDefault();
 var obj = {
  email:email.value,
  password:password.value
 };
 signInWithEmailAndPassword(auth, obj.email, obj.password)
 .then(function(success) {
  console.log(user.uid)
  alert('logged in')
 })
 .catch(function(error) {
   alert('login error' + error)
 })
 console.log(obj)
}