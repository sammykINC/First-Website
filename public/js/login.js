// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { 
  getAuth, 
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
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// LOGIN FORM

// getting all the objecst of html

var email = document.getElementById("txtEmail")
var password = document.getElementById("txtPassword")

window.login = function(e) {
 e.preventDefault();
 var obj = {
  email:email.value,
  password:password.value
 };
 signInWithEmailAndPassword(auth, obj.email, obj.password)
 .then(function(success) {
  console.log(user.uid);
  window.location.replace('index.html');
 })
 .catch(function(error) {
   console.log('login error' + error);
 })
 console.log(obj)
}