// Write a JavaScript program, take user input and generate a visiting card.

function save(){
    let info = document.querySelector(".info");
    info.style="display:none";

  let image =  document.querySelector("#image").value;

  let name = document.querySelector("#name").value;

  let profession = document.querySelector("#profession").value;


  let email = document.querySelector("#email").value;


  let mobile = document.querySelector("#mobile").value;

  let address = document.querySelector("#address").value;
  let card = `<section class="cover">
          
          <div class="image">
          <img src="${image}" alt="">
          </div>

          <section>
            <h2>${name}</h2>
            <h4>${profession}</h4>
            <h4>${email}</h4>
            <h4>${mobile}</h4>
            <h4>${address}</h4>
          </section>
    </section>`


   let showcard = document.querySelector(".showcard")
   showcard.innerHTML = card;
}