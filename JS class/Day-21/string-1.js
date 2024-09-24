

let str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorum corporis sit praesentium dolore suscipit omnis delectus officia odit laboriosam velit quaerat cumque similique, mollitia repellendus cum consequatur ex commodi."



 let a = " ";
 for(let i in str){
    if(i>43 && i<90)
    {
        if (str[i] !== " ")
        {
            a= a+str[i];
        }
    }
        else{
            a=a+str[i];
        }
    
 }
 console.log(a);