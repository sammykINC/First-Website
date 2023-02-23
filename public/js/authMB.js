// Register 

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm['validationCustom03'].value;
  const password = signupForm['validationCustom05'].value;

  // console.log(email, password);

  // sign up the user
  createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred)
  })
})