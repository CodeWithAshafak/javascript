let arrofobj = [
    {
        "cimg":"https://imarajkot.org/assets/images/logo_ima.png",
        "cname":"watch",
        "crating":"5.5",
        "cbrand":"quartz",
        "cprice":"999"

    },

    {
        "cimg":"https://imarajkot.org/assets/images/logo_ima.png",
        "cname":"watch",
        "crating":"5.5",
        "cbrand":"quartz",
        "cprice":"999"

    }
    ,
    {
        "cimg":"https://imarajkot.org/assets/images/logo_ima.png",
        "cname":"watch",
        "crating":"5.5",
        "cbrand":"quartz",
        "cprice":"999"

    }
    ,
    {
        "cimg":"https://imarajkot.org/assets/images/logo_ima.png",
        "cname":"watch",
        "crating":"5.5",
        "cbrand":"quartz",
        "cprice":"999"

    }
    ,
    {
        "cimg":"https://imarajkot.org/assets/images/logo_ima.png",
        "cname":"watch",
        "crating":"5.5",
        "cbrand":"quartz",
        "cprice":"999"

    }
    
]

let show = document.querySelector('#output'); 
show.innerHTML = arrofobj.map(e=>`
       <div id="card">
         <img src="${e.cimg}" alt="">
            <div id="cartc">
            <div>${e.cname}</div>
            <div>${e.crating}</div>
            <div>${e.cbrand}</div>
            <div>${e.cprice}</div>
      </div>
      <button>Buy now</button>
    </div>

    `).join("");