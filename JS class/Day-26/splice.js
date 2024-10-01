
let arr =[3,4,5,7,8]
console.log("original array is ", arr)

arr.splice(arr.length-1,1)
console.log(arr); //last wala elemet delet hua  yha "1" kitne value delete karna hai batata hai . if u used "0" then u are saying that u have to add the value.. u will see in upcoming example 


arr.splice(arr.length,0,90)
console.log(arr)
// last me 90 add karta hai 

arr.splice(arr.length,0,78,79,80)//here we are adding 78,79,and 80 to the end of the array , 0 is deciding that we are adding to the array.
console.log(arr)



arr.splice(0,1)
console.log(arr)//shift
/*In the case of array.splice(0, 1), we have:

start: 0, which means we're starting from the first element of the array (index 0).
deleteCount: 1, which means we're removing 1 element from the array.
So, when we call array.splice(0, 1), we're removing the first element of the array.*/


arr.splice(0,1,23)
console.log(arr); //0th index ka element hataya and uski jagah 23 ko rakh diya.

arr.splice(0,0,90);// like unshift
/*
yha 0th index pr 90 add kiye, second wala 0 yha add krna aisa bata rha hai 
*/
console.log(arr);



arr.splice(6,1,"ashafak ")//6th index pr delete karke uski jaha string add kare
console.log(arr);


arr.splice(3,0, "heelo","uncle","welcome to house") // index 3 se start karke new element add karte gaye 
console.log(arr);



