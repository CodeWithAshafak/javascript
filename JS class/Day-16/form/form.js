"use strict";
 let selectshowcard3 = document.querySelector('.rr');
    selectshowcard3.style.display="none";
    let selectshowcard2= document.querySelector('.fd');
    selectshowcard2.style.display="none";
function show() {
   
    var name = document.querySelector('.n').value;
    var profession = document.querySelector('.prof').value;
    var email = document.querySelector('.e').value;
    var phone = document.querySelector('.ph').value;
    var address = document.querySelector('.addr').value;

    if (name === "") {
        window.alert("Please enter your name");
        document.querySelector('.n').focus();
        return false;
    }
    if (profession === "") {
        window.alert("Please enter your profession");
        document.querySelector('.prof').focus();
        return false;
    }
    if (phone === "") {
        window.alert("Please enter your phone number");
        document.querySelector('.ph').focus();
        return false;
    }
    if (email === "") {
        window.alert("Please enter your email");
        document.querySelector('.e').focus();
        return false;
    }
    if (address === "") {
        window.alert("Please enter your address");
        document.querySelector('.addr').focus();
        return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        window.alert("Please include a valid domain in your email");
        document.querySelector('.e').focus();
        return false;
    }
    if (phone.length !== 10 || isNaN(phone)) {
        window.alert("Please enter a valid 10-digit phone number");
        document.querySelector('.ph').focus();
        return false;
    }

    output();
    return false;
}

function output() {
 let selectshowcard3 = document.querySelector('.rr');
    selectshowcard3.style.display="block";
    let selectshowcard2= document.querySelector('.fd');
    selectshowcard2.style.display="block";
    let name = document.querySelector('.n').value;
    let imgurl = "u.png";
    let profession = document.querySelector('.prof').value;
    let useremail = document.querySelector('.e').value;
    let usermobile = document.querySelector('.ph').value;
    let address = document.querySelector('.addr').value;

    let card = `
        <section class="carddesign">
            <article>
                <div><img src="${imgurl}" alt="Profile Picture"></div>
                <div>
                    <h3>${name}</h3>
                    <h3>${profession}</h3>
                    <h3>${useremail}</h3>
                    <h3>${usermobile}</h3>
                </div>
            </article>
            <article>
                <div><u>${address}</u></div>
            </article>
        </section>`;

    let selectshowcard = document.querySelector('.showcard');
    selectshowcard.innerHTML = card;
}

function another() {
    let name = document.querySelector('.n').value;
    let imgurl = "u.png";
    let profession = document.querySelector('.prof').value;
    let useremail = document.querySelector('.e').value;
    let usermobile = document.querySelector('.ph').value;
    let address = document.querySelector('.addr').value;

    let card = `
        <section class="carddesign csd">
            <article>
                <img src="${imgurl}" alt="Profile Picture">
            </article>
            <article>
                <h3>${name}</h3>
                <h3>${profession}</h3>
                <h3>${useremail}</h3>
                <h3>${usermobile}</h3>
                <u>${address}</u>
            </article>
        </section>`;

    let selectshowcard = document.querySelector('.showcard');
    selectshowcard.innerHTML = card;
}
function dd(){

    let selectshowcard = document.querySelector('.form-container');
    selectshowcard.style.display="none";
    
    let selectshowcard3 = document.querySelector('.rr');
    selectshowcard3.style.display="none";
    let selectshowcard2= document.querySelector('.fd');
    selectshowcard2.style.display="none";
    print();

}