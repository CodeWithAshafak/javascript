let todo = [];
let req =  prompt("please enter your request");
console.log(req);
while(true)
{
    if(req=="quit")
    {
        console.log("quiting App");
        break;
    }
    


    if(req=="list")
     {  console.log("================");
     
        for(task of todo)
        {
            console.log(task);
            
        }
     }
     else if(req=="add")
     {
        console.log("================");
        for(let i=0 ; i<=todo.length ; i++)
        {
            todo.push()
        }

     }

}