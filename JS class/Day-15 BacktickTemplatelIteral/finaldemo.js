function output(){

    let imgurl = "https://images.app.goo.gl/H7tWKKtWfUZcDyuS7";
    let username = "Deepak patel";
    let userproffession = "Trainer";
    let useremail = "";
    let usermobile = "";
    let useraddress = "";
    
    
    let card = ` <section class="carddesign">
            <article>
                <div><img src="${imgurl}" alt=""></div>
                <div>
                    <h4>${username}</h4>
                    <h5>${userproffession}</h5>
                    <h6>${useremail}</h6>
                    <h6>${usermobile}</h6>
                </div>
            </article>
            <article>
                <div>${useraddress}</div>
            </article>
        </section>`;
    
    
      let selectshowcard = document.querySelector('.showcard');
      selectshowcard.innerHTML = card;
    
    }