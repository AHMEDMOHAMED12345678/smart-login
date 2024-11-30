var loginEmailInput = document.getElementById("loginEmail");
var loginPasswordInput = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");
var signupAnchor = document.getElementById("signupAnchor");

var users = [];

function signIn() {
    let loginEmail = loginEmailInput.value;
    let loginPassword = loginPasswordInput.value;
  
    if (loginEmailInput.value === "" || loginPasswordInput.value === "") {
      swal({
        text: "Please fill in all fields",
      });
      return;
    }
  
    if (isCorrectEmailAndPassword(loginEmail, loginPassword)) {
      window.location.href = "home.html";
    } else {
      swal({
        text: "Sign up successful",
      });
    }
  }


  function isCorrectEmailAndPassword(email, password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        localStorage.setItem("userName", users[i].name);
        return true;
      }
    }
    return false;
  }
  
  loginBtn.addEventListener("click", function () {
    signIn();
  });
  
  signupAnchor.addEventListener("click", function () {
    window.location.href = "signup.html";
  });