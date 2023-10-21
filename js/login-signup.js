// Get the modals, buttons, and links
const loginModal = document.getElementById("myModal");
const signupModal = document.getElementById("signupModal");
const createAccountBtn = document.getElementById("createAccountBtn");
const backToLoginBtn = document.getElementById("backToLoginBtn");
const forgotPasswordLink = document.getElementById("forgotPasswordLink");

// Function to show the login modal
function showLoginModal() {
  loginModal.style.display = "block";
  signupModal.style.display = "none";
}

// Function to show the sign-up modal
function showSignupModal() {
  loginModal.style.display = "none";
  signupModal.style.display = "block";
}

// Function to handle the "Forgot Password" link (customize as needed)
function handleForgotPassword() {
  alert("Forgot Password functionality to be implemented.");
  // You can redirect the user to a password reset page or display a form for password recovery.
}

// Initially, show the login modal
showLoginModal();

// Add event listeners for the buttons and link
createAccountBtn.addEventListener("click", showSignupModal);
backToLoginBtn.addEventListener("click", showLoginModal);
forgotPasswordLink.addEventListener("click", handleForgotPassword);

// Get the modal for login
var modal = document.getElementById("myModal");

// Get the button that opens the login modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the login modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the login modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x) in the login modal, close the login modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the login modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the <span> element that closes the sign-up modal
var signupCloseBtn = document.getElementById("signupCloseBtn");

// When the user clicks on <span> (x) in the sign-up modal, close the sign-up modal
signupCloseBtn.onclick = function() {
  signupModal.style.display = "none";
}
