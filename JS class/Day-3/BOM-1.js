function check()
{
  let x =   document.querySelector("#check").value;
  if(x==="")
  {
    window.alert("empty")
  }
  else if (x>10)
  {
    window.alert("x is greater than 10");
  }
  else if(x>10 && x<100)
  {
    window.alert("x is in between 10 and 100");
  }
  else{
    window.alert("x is greater than 100");
  }
}