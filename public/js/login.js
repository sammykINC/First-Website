// const btn = document.querySelector("#login");
// btn.addEventListener("click", () => {
//  window.alert("You have successfully logged in!");
// })


// Validation
(() => {
 'use strict'

 // Fetch all the forms we want to apply custom Bootstrap validation styles to
 const forms = document.querySelectorAll('.needs-validation')

 // Loop over them and prevent submission
 Array.from(forms).forEach(form => {
   form.addEventListener('submit', event => {
     if (!form.checkValidity()) {
       event.preventDefault()
       event.stopPropagation()
     }
     form.classList.add('was-validated')
   }, false)
 })
})()