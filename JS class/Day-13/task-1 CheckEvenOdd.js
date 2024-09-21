function evenOdd(){
    let n = document.querySelector('.fnumber').value;
    if(parseInt(n%2)===0)
    {
        window.alert("its even number")
    }
    else
    {
       window.alert("odd number")
    }
}