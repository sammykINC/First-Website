// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

import { 
  getAuth, 
  onAuthStateChanged, 
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


