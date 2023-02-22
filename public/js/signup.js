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


// Registration Form
function registration()
{

  var fName= document.getElementById("t1").value;
  var lName= document.getElementById("t2").value;
  var email= document.getElementById("t3").value;
  var pwd= document.getElementById("t4").value;			
  var cpwd= document.getElementById("t5").value;

  
      //email id expression code
  var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(fName=='')
  {
    alert('Please enter your first name');
  }
  else if(!letters.test(fName))
  {
    alert('first name field required only alphabet characters');
  }
  else if(lName=='')
  {
    alert('Please enter your last name');
  }
  else if (!filter.test(lName))
  {
    alert('last name field required only alphabet characters');
  }
  else if(email=='')
  {
    alert('Please enter your email');
  }
  else if(!letters.test(email))
  {
    alert('Invalid email');
  }
  else if(pwd=='')
  {
    alert('Please enter Password');
  }
  else if(cpwd=='')
  {
    alert('Enter Confirm Password');
  }
  else if(!pwd_expression.test(pwd))
  {
    alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
  }
  else if(pwd != cpwd)
  {
    alert ('Password not Matched');
  }
  else if(document.getElementById("t5").value.length < 6)
  {
    alert ('Password minimum length is 6');
  }
  else if(document.getElementById("t5").value.length > 20)
  {
    alert ('Password max length is 20');
  }
  else
  {				                            
             alert('Thank You for Signing Up!');
       // Redirecting to other page or webste code. 
       window.location = "https://sammyk-inc.web.app/index.html"; 
  }
}
function clearFunc()
{
  document.getElementById("t1").value="";
  document.getElementById("t2").value="";
  document.getElementById("t3").value="";
  document.getElementById("t4").value="";
  document.getElementById("t5").value="";
}