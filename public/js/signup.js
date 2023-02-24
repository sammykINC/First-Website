// Registration Form
function registration()
{

  var firstName = document.querySelector("firstName").value;
  var lastName = document.querySelector("lastName").value;
  var email = document.querySelector("email").value;
  var password = document.querySelector("password").value;			
  var repPassword = document.querySelector("repPassword").value;

  
      //email id expression code
  var password_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(firstName=='')
  {
    alert('Please enter your first name');
  }
  else if(!letters.test(firstName))
  {
    alert('first name field required only alphabet characters');
  }
  else if(lastName=='')
  {
    alert('Please enter your last name');
  }
  else if (!filter.test(lastName))
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
  else if(password=='')
  {
    alert('Please enter Password');
  }
  else if(repPassword=='')
  {
    alert('Enter Confirm Password');
  }
  else if(!password_expression.test(password))
  {
    alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
  }
  else if(password != repPassword)
  {
    alert ('Password not Matched');
  }
  else if(document.querySelector("repPassword").value.length < 6)
  {
    alert ('Password minimum length is 6');
  }
  else if(document.querySelector("repPassword").value.length > 20)
  {
    alert ('Password max length is 20');
  }
  else
  {				                            
             alert('Thank You for Signing Up!');
       // Redirecting to other page or webste code. 
      //  window.location.replace = "https://sammyk-inc.web.app/index.html"; 
  }
}
function clearFunc()
{
  document.querySelector("firstName").value="";
  document.querySelector("lastName").value="";
  document.querySelector("email").value="";
  document.querySelector("password").value="";
  document.querySelector("repPassword").value="";
}