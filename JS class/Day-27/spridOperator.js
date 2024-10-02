//sprid operator is used to update the object at the run time 

function data()
{
    let name = document.querySelector('#name').value;
    let value = document.querySelector('#age').value;
    let mobile = document.querySelector('#mob').value;



    let obj = {
        "name":" ",
        "age":" ",
        "mobile":" "

    }
    let upobj = {
        "name":name,
        "age":age,
        "mobile":mobile
    }

    let result = {
        ...obj,
        ...updobj
    }

    console.log(result);
    
}

function sub()
{
    alert("subbiteeddd")
}