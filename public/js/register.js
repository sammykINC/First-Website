import { getAuth, createUserWithEmailAndPassword } 
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

// getting the required objects from html
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const repPassword = document.getElementById("repPassword")

//          REGISTRATION FORM
window.signup = function(e){
  e.preventDefault();
  const obj = {
    firstName:firstName.value,
    lastName:lastName.value,
    email:email.value,
    password:password.value,
    repPassword:repPassword.value
  }

  // Check that all required fields are filled out
  if (obj.firstName == "" || obj.lastName == "" || obj.email == "" || obj.password == "" || obj.repPassword == "") {
    alert("All fields are required. Please fill out the form.");
    return false;
  }

  // Required password input
  if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(password)) {
    alert ('Password must be at least 10 characters long and must contain an Upper case, Lower case, Special character and a Numeric letter')
  }

  // Check that the password and confirm password fields match
  if (obj.password != obj.repPassword) {
    alert("The password and confirm password fields do not match.");
    return false;
  }

  // If all validation checks pass, submit the form
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function(success) {
    console.log('signup successfull');
    window.location.replace('index.html');
  })
  .catch(function(error) {
    console.log('error' + error);
  })
    console.log(obj);
};