let arrofobj = [
    {
        "cimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOx_Jr8S8l2GD5xpj6b3GDTW3joonJLdruw&s",
        "cname": "alexa",
        "crating":"4.9",
        "cbrand":"amazon ",
        "cprice":"6999"

    },
    {
        "cimg":"https://m.media-amazon.com/images/I/51X-dNvz6zS.SR240,220.jpg",
        "cname": "decor light ",
        "crating":"4.5",
        "cbrand":"havels ",
        "cprice":"599"

    },
    {
        "cimg":"https://m.media-amazon.com/images/I/4180tJsogaL.SR480,440.jpg",
        "cname": "realme",
        "crating":"4.7",
        "cbrand":"realme",
        "cprice":"9999"

    },
    {
        "cimg":" ",
        "cname": " ",
        "crating":"",
        "cbrand":" ",
        "cprice":""

    },
    {
        "cimg":" ",
        "cname": " ",
        "crating":"",
        "cbrand":" ",
        "cprice":""

    },
    {
        "cimg":" ",
        "cname": " ",
        "crating":"",
        "cbrand":" ",
        "cprice":""

    },
    {
        "cimg":" ",
        "cname": " ",
        "crating":"",
        "cbrand":" ",
        "cprice":""

    }
]
let show = document.querySelector('#output');
show.innerHTML = arrofobj.map(e=>`
    <div id="cart">
    <img src="${e.cimg}" alt="">
    <div id="cartc">
    <div>${e.cname}</div>
    <div>${e.crating}</div>
    <div>${e.cbrand}</div>
    <div>${e.cprice}</div>
    </div>
    <button>Buy Now</button>
    
    </div>
    `).join("");