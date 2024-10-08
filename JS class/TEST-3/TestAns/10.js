// Write a JavaScript program that takes user input of two numbers and add them.
function check()
{
   let n1 = parseInt( document.querySelector("#n1").value);
   let n2 = parseInt( document.querySelector("#n1").value);

   let add = (n1 +n2);

   let display = document.querySelector(".display");
   display.innerHTML = add;
}