function compare()
{
    let num1 = parseInt(document.querySelector('.num1').value);
    
    let num2 = parseInt(document.querySelector('.num2').value);
    let num3 = parseInt(document.querySelector('.num3').value) ;

    console.log(num1,num2,num3);

    let output = document.querySelector('.output');

    if(num1>num2 && num1>num3)
    {
        output.innerHTML= "number one is greater" + num1;
        // console.log("number one is greater")
    }
    else if(num2>num1 && num2>num3)
    {
        output.innerHTML= "number two is greater" + num2;
        // console.log("number two is greater")
    }
    else{

        output.innerHTML= "number three is greater" + num3;
        // console.log("number three is greater")
    }


    return false;

}