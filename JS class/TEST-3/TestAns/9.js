// Write a JavaScript program to elaborate what is the difference between var,let and const.



// VAR  :-

console.log("var examole :-");
var x = 10;
 console.log("initiail vlaue of x :",x);


 var x=20;  //Redeclaration of var allowed 
 console.log("redeclaration of var x",x);
 
function varExample()
{
    var y =30;
    console.log("value of y inside funciton ",y);
    
}
varExample()
//console.log("value of y outside the function ",y); // this will throw error.



//=====Let example:-
let a =50;

console.log("initial value of a is ",a);


//Redeclartion of let is not allowed
// let a =60;
// console.log("redeclartion of a",a);



// Let has block scope
if (true) {
    let b = 30;
    console.log("Value of b inside block:", b);
  }
  // console.log("Value of b outside block:", b); // This will throw  error
  
  // ==========Const Example=====
  c=10;
 console.log("initial value of c ",c);

 //c=45;
 console.log(c);
 //this will throw an error
 

 

 

