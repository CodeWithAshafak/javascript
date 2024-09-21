let count = 0;
const run = () =>{
    setInterval(timer,10)
}

const timer = () =>{
    count = count+1;
    if(count<1000){
        let select1 = document.querySelector('#output');
        select1.innerHTML = count ;
    }
}


