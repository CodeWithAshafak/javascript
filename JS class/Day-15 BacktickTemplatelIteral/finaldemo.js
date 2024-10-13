function output(){

    let imgurl = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    let username = "Ashfak Altaf Astanwale";
    let userproffession = "softwere engineer";
    let useremail = "ashfak04@gamil.com";
    let usermobile = "8698468448";
    let useraddress = "New minal resideny bhopal madhya pradesh ";
    
    
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