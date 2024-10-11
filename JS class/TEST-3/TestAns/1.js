// Write a JavaScript program to calculate the average of three numbers.

function avg(){

let n1 =  parseInt( document.querySelector("#n1").value);
let n2 = parseInt( document.querySelector("#n2").value);
let n3 = parseInt( document.querySelector("#n3").value);
if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    alert("Please enter valid numbers");
    return;
  }

let avg = `avg of ${n1},${n2} and ${n3} is ` + (n1+n2+n3)/3;

 let result = document.querySelector(".result")

result.innerHTML = avg;


}
