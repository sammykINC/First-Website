// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { 
  getAuth, 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signInWithRedirect, 
  getRedirectResult, 
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const firebaseConfig = {
  apiKey: "AIzaSyCFNxYlLhsuMZ2CDkYzehLrrld7Otgbguc",
  authDomain: "sammyk-inc.firebaseapp.com",
  projectId: "sammyk-inc",
  storageBucket: "sammyk-inc.appspot.com",
  messagingSenderId: "816489026486",
  appId: "1:816489026486:web:722dcaf021373b10306717",
  measurementId: "G-XRNJ7XBBTF"
};

// detect auth statex
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Set an authentication state observer and get user data
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    const uid = user.uid;
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});

login.addEventListener('click',(e) => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
})