function addinfo(){
    let selectform = document.querySelector(".formcover");
    selectform.style.display = "block";

} 

// ----------- submit data ---------
function submitData(){
   
    let guestName = document.querySelector("#guestName").value;
    let date = document.querySelector("#dateOfOrder").value;
    let mob = document.querySelector("#mob").value;
    let roomType = document.querySelector("#roomType").value;
    let status = document.querySelector("#status").value;

    let customerInfo = {
        "guestName" :guestName,
        "date":date,
        "mob":mob,
        "roomType":roomType,
        "status":status

    }
    fetch('http://localhost:4000/CustInfo',{
        method:"POST",
        headers:{
             "content-type":"application/json"
        },
        body:JSON.stringify(customerInfo)
    })

}

// ****Display data *******
(async function () {
    let data = await fetch('http://localhost:4000/CustInfo');
    
    let response = await data.json();
    let selectedTable = document.querySelector("#data");
    selectedTable.innerHTML = response.map((items)=>`
     
   

    <tr>
    <td> ${items.guestName}</td>
    <td> ${items.status}</td>
    <td> ${items.date}</td>
    <td> ${items.mob}</td>
    <td>${items.roomType}</td>
    <td>
    <button onclick='del('${items.id}')'>Delete</button>
    <button onclieck='openform('${items.id}')'>Updata</button>

    </td>

    </tr>

    `).join(" ")

    
})()