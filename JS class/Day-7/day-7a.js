function change_style(){
    let selected_button = document.querySelector(".contact");
    selected_button.style.color ="yellow";
    selected_button.style.backgroundColor = "black";
    selected_button.style.border = "2px solid yellow";
}

function previous_style(){
    let selected_button = document.querySelector(".contact");
    selected_button.style.color ="black";
    selected_button.style.backgroundColor = "yellow";
    selected_button.style.border = "2px solid black";

}
