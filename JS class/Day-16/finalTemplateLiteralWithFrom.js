// "use strict"; // es-6 2015 versrion

function output() {
  let imgUrl = document.querySelector(".userimageurl").value;
  let userName = document.querySelector(".username").value;
  let userProfession = document.querySelector(".userprofession").value;
  let userEmail = document.querySelector(".useremail").value;
  let userMobile = document.querySelector(".usermobile").value;
  let userAddress = document.querySelector(".useraddress").value;

  let card = ` <section class="carddesign">
        <article>
            <div>
                <img src="${imgUrl}" alt="">
                <div>
                    <h4>${userName}</h4>
                    <h5>${userProfession}</h5>
                    <h6>${userEmail}</h6>
                    <h6>${userMobile}</h6>
                    
                </div>
            </div>
        </article>
        <article>
        <div>${userAddress}</div>
        </article>

    </section>`;

  let selectshowcard = document.querySelector(".showcard");
  selectshowcard.innerHTML = card;

  //print
  return true;
}
