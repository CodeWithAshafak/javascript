// APPLYING THE css BY USING JS in the function 


function flexdirection() {
  let selectednav = document.querySelector(".nav");
  

  selectednav.style.display = "flex";
  selectednav.style.listStyle = "none";
  selectednav.style.gap = "20px";

  let list = document.querySelector('.nav li')
  list.style.listStyle="none"

  list.style.color="red";
  let anker = document.querySelector(".nav li a");
  anker.style.color="black";
  

}
