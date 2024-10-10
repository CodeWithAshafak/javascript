//Date is the premo class which is  present in browser 



let obj = new Date();
// new keywords  is used to create the object of the class,here obj is object of class Date  
console.log(obj.getTime()); //1726980337685 milisecond 
console.log(obj.getFullYear()); //2024
console.log(obj.getDay());      //0 for sunday



console.log(obj.toISOString()); //2024-09-22T04:50:03.862Z
console.log(obj.toLocaleDateString()); //  9/22/2024
console.log(obj.toString());  // important :- Sun Sep 22 2024 10:24:10 GMT+0530 (India Standard Time)
console.log(obj.toTimeString()); //10:25:11 GMT+0530 (India Standard Time)


// Answere:-

// Date.js:8 2024
// Date.js:9 0
// Date.js:13 2024-09-22T04:45:37.685Z
// Date.js:14 9/22/2024
// Date.js:15 Sun Sep 22 2024 10:15:37 GMT+0530 (India Standard Time)
// Date.js:16 10:15:37 GMT+0530 (India Standard Time)