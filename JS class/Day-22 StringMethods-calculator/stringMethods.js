// trim method :- the trim method is used to delet the white space ....the white space may be at the start of string and ending of string

let str = "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus iste nobis quis error quas, doloribus, distinctio dolorum maiores, debitis nam maxime ratione! Atque voluptatem dolor, aliquid quia nesciunt porro?         "; 



let output = str.toUpperCase(str);
console.log(output);

let output1 = str.toLowerCase(str);
console.log(output1);


// let output2 = str.toLowerCase(str);
// console.log(output2);

let output3 = str.trim(); //start and last ka space kat deta
console.log(output3);




console.log(str.charCodeAt(4)); 

//charCodeAt :-
//It returns the Unicode value of the character at a specified index in a string.
// The index starts from 0, so the first character is at index 0, the second character is at index 1, and so on.
// If the index is out of range, it returns NaN (Not a Number).


console.log(str.charAt(45)); //give charceter at the specific index

console.log(str.includes("Lorem"));

console.log(str.indexOf("L"));




