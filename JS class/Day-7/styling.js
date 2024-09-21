// function change_style(){
//     let selected_button = document.querySelector('.contact');
//     selected_button.style.color = "yellow";
//     selected_button.style.backgroundColor = "black"
//     selected_button.style.border = "2px solid yellow"
// }

// function previous_style(){
//     let selected_button = document.querySelector('.contact');
//     selected_button.style.color = "black";
//     selected_button.style.backgroundColor = "yellow"
//     selected_button.style.border = "2px solid black"
// }

// ------------------------

function opennav(){
    let selectnav = document.querySelector('.openlist');
    selectnav.style.left = "0px";
    selectnav.style.transition = "left 1s";

}

function closeNav(){
    let unSelectNav = document.querySelector('.openlist');
    unSelectNav.style.left = "-300px";
    unSelectNav.style.transition = "left 1s";

}