let emessage = document.getElementById("email-message");
let epassword = document.getElementById("password-message");

function validateemail() {
  let email = document.getElementById("uName").value;
  if (email.length <= 5) {
    emessage.innerHTML = "Please enter valid email address";
  }
}

function validatepassword() {
  let password = document.getElementById("upassword").value;
  if (password.length <= 5) {
    epassword.innerHTML = "Please enter valid password";
  }
}
