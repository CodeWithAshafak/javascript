function output() {
  let imgurl = "https://images.app.goo.gl/mM6QWJkgwJtrmnCU6";
  let username = "wae";
  let userprofession = "rrtq";
  let useremail = "asdf";
  let usermobile = "sdf";
  let useraddress = "adsfdf";

  let card = `<section class="carddesign">
    <article>
    <div><img src="${imgurl}" alt=""</div>
    <div>
        <h4>${username}</h4>
        <h5>${userprofession}</h5>
        <h6>${useremail}</h6>
        <h6>${usermobile}</h6>
    </div>
    </article>
    <article>
         <div>
         ${useraddress}
         </div>
    </article>
    </section>`;
  let selectshowcard = document.querySelector(".showcard");
  selectshowcard.innerHTML = card;
}
