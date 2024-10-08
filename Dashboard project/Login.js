function submit()
{

     let name = document.querySelector("#name").value;

     let password = document.querySelector("#password").value;
     


    let userInfo={
        name:name,
        password:password,
    };



    fetch("http://localhost:4000/login",
       {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(userInfo),
      });
   

}