function signup() {
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let mobile = document.querySelector(".mobile").value;
  let password = document.querySelector(".password").value;
  let cpassword = document.querySelector(".cpassword").value;

  if (name == "") {
    window.alert("Please enter your name");
    document.querySelector(".name").focus();
    return false;
  } else if (email == "") {
    window.alert("Please enter your email");
    document.querySelector(".email").focus();
    return false;
  } else if (!email.includes("@")) {
    window.alert("please include @ in email field");
    document.querySelector(".email").focus();
    return false;
  } else if (!email.includes(".com")) {
    window.alert("please enter valid email only");
    document.querySelector(".email").focus();
    return false;
  } else if (mobile === "") {
    window.alert("Please enter your mobile number");
    document.querySelector(".mobile").focus();
    return false;
  } else if (mobile.length !== 10) {
    window.alert("please enter 10 digit number");
    document.querySelector(".mobile").focus();
    return false;
  } else if (isNaN(mobile)) {
    window.alert("please enter digit only");
    document.querySelector(".mobile").focus();
    return false;
  } else if (password == "") {
    window.alert("Please enter your password");
    document.querySelector(".password").focus();
    return false;
  } else if (
    !(password.match(/[1234567890]/) &&
    password.match(/[qwertyuiopasdfghjklzxcvbnm]/) &&
    password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/) &&
    password.match(/[!#@$%^&*]/))
  ) {
    window.alert("Please use strong password");
    document.querySelector(".password").focus();
    return false;
  } else if (cpassword == "") {
    window.alert("Please confirm your password");
    document.querySelector(".cpassword").focus();
    return false;
  } else if (password != cpassword) {
    window.alert("Passwords do not match");
    document.querySelector(".cpassword").focus();
    return false;
  } else {
   window.location.href = "login.html";
     window.open("login.html");
  
  }

  window.alert("Registration successful!");
  return true;
}

/*
  else if(!password.match(/[0-9]/)){
    window.alert("please include digit in password");
    document.querySelector('.password').focus();
    return false;
  }
  else if(!password.match(/[A-Z]/)){
    window.alert("please include upper case in password");
    document.querySelector('.password').focus();
    return false;
  }
  else if(!password.match(/[a-z]/)){
    window.alert("please lowercase in password");
    document.querySelector('.password').focus();
    return false;
  }
  else if(!password.match(/[!@#$%^&*()_+?/|\:;"',.=-~`]/)){
    window.alert("please include special character in password");
    document.querySelector('.password').focus();
    return false;
  }
    */
