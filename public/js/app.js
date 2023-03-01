// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { 
  getAuth, 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithRedirect,
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

// Auth state
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    const uid = user.uid;
    console.log('a signed in user is online');
    setupUi(user);
  } else {
    console.log('No registered user is online');
    setupUi();
  }
});

// Registration form
var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var email = document.getElementById("email")
var password = document.getElementById("password")
var repPassword = document.getElementById("repPassword")

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
    alert('signup successfull');
    window.location.replace('index.html');
  })
  .catch(function(error) {
    console.log(alert('error' + error));
  })
  console.log(obj);
};

// google login?
// const googleLogin = document.querySelector("#googleLoginBtn");
// googleLogin.addEventListener('click', (e) => {
// signInWithRedirect(auth, provider)
//   .then((result) => {

//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     const user = result.user;

//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     const email = error.customData.email;
//     const credential = GoogleAuthProvider.credentialFromError(error);
//   });
// })


