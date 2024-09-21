function opennav(){
  let selectnav =  document.querySelector('.openlist')
  selectnav.style.left = "0px";
  selectnav.style.transition = "left 1s";
}


function closenav(){
    let unSelectNav = document.querySelector('.openlist');
    unSelectNav.style.left = "-300px";
    unSelectNav.style.transition ="left 1s";
}