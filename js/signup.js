var signupbtn=document.getElementById("signupBtn");
var signupname=document.getElementById("signupName");
var signupemail=document.getElementById("signupEmail");
var signuppass=document.getElementById("signupPassword");
var signin=document.getElementById("signin");


var users=[];

if(localStorage.getItem("users") !=null){
    users= JSON.parse(localStorage.getItem("users"));
}


function signup(){
    var user={
        name:signupname.value,
        pass:signupemail.value,
        email:signupemail.value
    }
};

if(signupemail.value===""|| signupname.value===""|| signuppass.value===""){
  Swal.fire("please fill in your name and password and email");
    
  }
  if (
    isValidEmail(signupemail.value) &&
    isNewEmail(signupemail.value)
  ) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clearForm();
    console.log(users);
    swal({
      text: "Sign up successful",
    });
  } else {
    Swal.fire("invalid email address provided or password provided for signup");
  }

  signupBtn.addEventListener("click", function () {
    signUp();
  });

  function isValidEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function isNewEmail(email) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        return false;
      }
    }
    return true;
  }

  
function clearForm() {
    signupNameInput.value = "";
    signupEmailInput.value = "";
    signupPasswordInput.value = "";
  }
  
  signin.addEventListener("click", function () {
    window.location.href = "index.html";
  });
