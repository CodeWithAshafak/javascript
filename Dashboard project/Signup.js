// Function to handle registration
function reg() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirmpassword = document.querySelector("#confirm-password").value; 
  
    let userInfo = {
      name: name,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    };
  
    fetch("http://localhost:4000/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(userInfo),
    });
  }