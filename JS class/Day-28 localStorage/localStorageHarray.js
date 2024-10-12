// local storage is the web storeage 
// this data store without delete after exit from the browser


let key = prompt("enter key u want to set");

let value = prompt("enter value u want to set");

localStorage.setItem(key,value);
console.log(`the value at ${key} is ${localStorage.getItem(key)} `);

if(key == "red" || key =="blue"
)
{
    localStorage.removeItem(key);
}// agar key red or blue hogi tab item remove ho jayega 

if(key==0)
{
    localStorage.clear()
}// jaisa bhi key zero hogi local storage puri clear ho jayegi 