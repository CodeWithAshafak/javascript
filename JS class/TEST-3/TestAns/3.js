// Write a JavaScript program to perform a form validation for email and name input field.

function submit() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;

  if (name === "" || email === "") {
    alert("please enter name and email");
    return false;
  }

  return false;
}
