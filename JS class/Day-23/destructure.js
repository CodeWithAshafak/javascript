// Destructure
// jav jaem kisi bhi oject ke key ko bar bar use krna hai tb hum uss keys ko vairable ke form me rakh sekte hai and us key ko directly use krte hai 

// OBJECT is the combination of key and value pairs\
// if  u create a funciton in object it called method
// kabhi bhi same name ki key exist nhi kr skti , agar hai to last wali key previus key ko overrigt karegi 

let obj = {
    name:"deepak",
    course :"FDS",
    batch:"P33",
    num :45,
    num1 :34,
    bool:10<11,
    run:function()
    {
        // console.log("this is method call");
        console.log(this.num+ this.num1)
        //console.log(obj.num + obj.num1);  
    },
    arr:[4,3,6,4,7,8,6,3,4,5]

    
}
let {num1, num, course}=obj;
console.log(obj.name);
console.log(course);
console.log(num1);
console.log(num);

obj.run();
console.log(obj.arr[4]);

