function cal(){
    let one = parseInt(document.querySelector('#one').value);
   let two = parseInt(document.querySelector('#two').value);

  console.log("called the function");
  alert("called the alert");
  alert(one+two);
  window.alert("this is window alert")  
  return false;
}