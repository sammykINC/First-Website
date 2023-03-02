// Import the functions you need from the SDKs you need
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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
const auth = getAuth(app);

// LOGIN FORM

// getting the required objects from html
const email = document.getElementById("email")
const password = document.getElementById("password")

window.login = function(e) {
 e.preventDefault();
 const obj = {
  email:email.value,
  password:password.value
 };
 signInWithEmailAndPassword(auth, obj.email, obj.password)
 .then(function(success) {
  window.location.replace('index.html');
  console.log(user.uid);
 })
 .catch(function(error) {
   console.log('login error' + error);
 })
 console.log(obj)
}