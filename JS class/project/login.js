function submit()
{
    let login = document.querySelector('#id').value;
    let pass = document.querySelector('#pass').value;

    if(login==="")
    {  
       window.alert("please enter login id")
    }
    else if(pass==="")
    {
        window.alert("please enter password")
    }

    return false;
}

