// Make 6 digit random generator of uppercase lowercase number and special character.


let str = "1234567890asdfghjklqwertyuiopzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";

let store = "";
for(let i=0 ; i<7;i++)
{
    let randomValue = Math.random();
    let afterMultiply = str.length*randomValue;
    let flooredvalue = Math.floor(afterMultiply);

    let output = str.charAt(flooredvalue);

    store = store + output;
}
document.querySelector(".display").innerHTML= store;

