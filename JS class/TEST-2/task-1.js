function save() {
  let email = document.querySelector(".email").value;
  let pass = document.querySelector(".password").value;
  if (email == "") {
    window.alert("please enter email");
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
  } else if (pass == "") {
    window.alert("please enter password");
    document.querySelector(".password").focus();
    return false;
  }
  else if(!pass.match("1234567890") && !pass.match("qwertyuiopasdfghjklmnbvcxz") && !pass.match("QWERTYUIOPASDFGHJKLZXCVBNM") && !pass.match("!@#$%^&*") )
  {
    window.alert("password is not strong ");
    document.querySelector(".password").focus();
    return false;
  }
  window.alert("You are logged in ");
  return true;
}
