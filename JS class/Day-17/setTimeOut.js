function showpage()
{
    setTimeout(run,1000);

    function run(){
        let selectlogo = document.querySelector('#logo');
        selectlogo.style.display = "none";

        let selectwebsite = document.querySelector('#website');
        selectwebsite.style.display = "block";
    }
}