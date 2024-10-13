function save(){
    let name = document.querySelector('.name').value;
    let lastName = document.querySelector('.lastName').value;
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
    let cpassword = document.querySelector('.cpassword').value;


    if(name == "")
    {
        window.alert("please enter name")
        document.querySelector('.name').focus();
        return false;
    }
    else if(lastName == ""){
        window.alert("please enter your last name")
        document.querySelector('.lastName').focus();
        return false;

    }
    else if(email == "")
    {
        window.alert("please enter your email address")
        document.querySelector('.email').focus();
        return false;

    }
    else if(password == "")
    {
        window.alert("please enter your password");
        document.querySelector('.password').focus();
        return false;

    }
    else if(cpassword == "")
    {

        window.alert("please Reenter your password");
        document.querySelector('.cpassword').focus();
        return false;
    }
}