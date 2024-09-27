// type cohargan in js:-

// console.log(0.1+0.2);
// console.log('4'+4);
// console.log('4'-4);
// console.log(4+true);
// console.log(4+false);

// string :-
let str =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia rem magnam rerum molestiae libero, asperiores cum, necessitatibus animi, minus voluptates nesciunt id sint voluptatibus aperiam optio dolor m dolor sit amet consectetur adipisicing elit. Nobis mollitia rem magnam rerum molestiae libero, asperiores cum, necessitatibus animi, minus voluptates nesciunt id sint voluptatibus aperiam optio dolor odit veritatis! ";

// for(let i in str)
// {
//        console.log(i)

// }
// for(let i of str)
// {

//      console.log(i)

// }



// ---------------

// let storeStr = "";
// for (let i of str) {
//   if (i !== " ") {
//     storeStr = storeStr + i;
//   }
// }

// console.log(storeStr);





// ---------------

let storeStr = "";
for (let i of str) {
if (i !== "I") {
     storeStr = storeStr + i;
  }
}

console.log(storeStr);

console.log(str.replaceAll(" ",""));
console.log(str.replace(" ","")); // it replace only first space of string.
console.log(str.length);



let s = str.slice(34,90);
console.log(s);
console.log(str.indexOf())


// ----------------------


