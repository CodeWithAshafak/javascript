// Write a JavaScript program to compare a three number which number is greater.

function check()
{
   let n1 = document.querySelector("#n1").value;
   let n2 =  document.querySelector("#n2").value;
   let n3 =  document.querySelector("#n3").value;
let greater;

//   if(n1>n2 && n1>n2)
//   {
//       greater = n1;

//   }
//   else if(n2>n1 && n2>n3)
//   {
//     greater = n2;
//   }
//   else 
//   {
//     greater = n3;
//   }
   

//=========or ==========
greater = Math.max(n1,n2,n3);

  let display = document.querySelector(".display")

  display.innerHTML = greater;
}