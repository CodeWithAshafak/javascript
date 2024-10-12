//delete :- element too delet hota but lenght ustni hi rhti hai 
//splice :- element ko delete karta hai uski index and value bhi delete karata hia 

let arr = [2,3,4,5];
console.log(arr) // [2, 3, 4, 5]

arr.pop();
console.log(arr); //[2, 3, 4] last wala hat jayega

arr.push(786);
console.log(arr); //[2, 3, 4, 786] //last me add hoga



arr.shift();
console.log(arr); //[3, 4, 786] start wala element  hot jayega 


arr.unshift(130)
console.log(arr); //[130, 3, 4, 786] // start me 130 add hoga

delete arr[3];
console.log(arr); //[130, 3, 4, empty] elememt to delete hoga but uska index nhi delet hoga ...so its is the drwback of the delete keyword.

// splice method 
// it is multiple use method in array 




