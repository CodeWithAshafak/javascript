function reg(){
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;

    let userinfo = {
        "name":name,
        "email":email

    }

    fetch ('http://localhost:4000/user',{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(userinfo)
    })
}