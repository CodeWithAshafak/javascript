//Slice:-Returns a part of the original string as a new string.
// ex. str.slice(start,end)
//ending index non inclusive hota hai ...us se ek kam ko lete hai.

let str = "ILoveCoding";


s=str.slice(5); // we can give start index also , here 5 is the starting index and it slice upto end 
console.log(s);


newStr = "apnacollage";
m=newStr.slice(0,4);
console.log(m);
p=newStr.slice(0,newStr.length);
console.log(p)

q=newStr.slice(-2)//[-2 strign ki length me se minus hota hai] 11-2=9 then 9th index wala code utha leta hai , yha "g"
console.log(q);
