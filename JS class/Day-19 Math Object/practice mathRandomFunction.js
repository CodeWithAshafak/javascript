//STRONG PASSWORD GENERATOR
const generate = () => {
  let str = "1234567890asdfghjklASDFGHJKL&@#$%&*-";
  blankStr = " ";
  for (i = 0; i < 8; i++) {
    let saveRandomNumber = Math.random();
    let multiply = str.length * saveRandomNumber;
    let index = Math.floor(multiply);

    let code = str.charAt(index);
    blankStr = blankStr + code;
  }

  let display = document.querySelector(".password");
  display.innerHTML = blankStr;
};
