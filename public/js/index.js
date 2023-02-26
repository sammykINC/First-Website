const loggedOutLinks = document.querySelectorAll("#loggedOutView");
const loggedInLinks = document.querySelectorAll("#loggedInView"); 

const setupUi = (user) => {
 if (user != null) {
  loggedInLinks.forEach(item => item.style.display = "block");
  loggedOutLinks.forEach(item => item.style.display = "none");
 } else {
  loggedInLinks.forEach(item => item.style.display = "none");
  loggedOutLinks.forEach(item => item.style.display = "block");
 }
}

