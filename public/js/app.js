// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { 
  getAuth, 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
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
  } else {
    console.log('No user');
  }
});


// Registration form

// getting all the objecst of html
var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var email = document.getElementById("email")
var password = document.getElementById("password")
var repPassword = document.getElementById("repPassword")

// making a function for storing data
window.signup = function(e){
  e.preventDefault();
  var obj = {
    firstName:firstName.value,
    lastName:lastName.value,
    email:email.value,
    password:password.value,
    repPassword:repPassword.value
  }
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function(success) {
    alert('signup successfull')
    window.location.replace('index.html')
  })
  .catch(function(error) {
    alert('error' + error)
  })
  console.log(obj)
};

