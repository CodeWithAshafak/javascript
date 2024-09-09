function registration() {
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
  } else if (mobile == "") {
    window.alert("Please enter your mobile number");
    document.querySelector(".mobile").focus();
    return false;
  } else if (password == "") {
    window.alert("Please enter your password");
    document.querySelector(".password").focus();
    return false;
  } else if (cpassword == "") {
    window.alert("Please confirm your password");
    document.querySelector(".cpassword").focus();
    return false;
  } else if (password !== cpassword) {
    window.alert("Passwords do not match");
    document.querySelector(".cpassword").focus();
    return false;
  }

  window.alert("Registration successful!");
  return true;
}
