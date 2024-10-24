// let products = [];
function addproduct(){
    
    let photo = document.getElementById("img1").value;
    let name = document.getElementById("name").value;
    let stock = document.getElementById("qnty").value;
    let price = document.getElementById("price").value;


    // if (!name || !stock || !price || !img) {
    //     alert('Please fill out all fields.');
    //     return false;
    // }


    let productinfo = {
        "name":name,
        "stock":stock,
        "price":price,
        "photo":photo

        
    }




fetch('http://localhost:4000/product',{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(productinfo)

})

}
// ----------delete code
function del(arg){
   
    let con = window.confirm("Do you want to delete product information");
    if(con){
        fetch(`http://localhost:4000/product/${arg}`,{
            method:"DELETE"
        })
    }else{
        alert("invalid click")
    }
   
}

// crud operation
(async function(){
    let data = await fetch('http://localhost:4000/product');
    let response = await data.json();



    document.querySelector('#data').innerHTML =  response.map((e)=>`
       <tr>
          <td>${e.id}</td>
          <td><img src="${e.image || 'https://c8.alamy.com/comp/2H36T4F/three-persons-admin-icon-outline-three-persons-admin-vector-icon-color-flat-isolated-2H36T4F.jpg'}" width="50px"></td>
          <td>${e.name}</td>
          <td>${e.stock}</td>
          <td>${e.price}</td>
          <td>
             <button onclick="updateProduct('${e.id}')">Update</button>
             <button onclick="del('${e.id}')">Delete</button>
          </td>
       </tr>
    `).join(" ");
})()
// ----------------------------------------------------------------------------------------------

let uid = null;
async function openform(arg){
    uid= arg
    let data = await fetch('http://localhost:4000/product');
    let response = await data.json();

    let info = response.find(e=>e.id === arg);
    console.log(info)
    let selectform = document.querySelector('.productform');
    selectform.style.display = "block";
    let selectubtn = document.querySelector('.addbtn');
    selectubtn.style.display = "block"; //none
    let selectpbtn = document.querySelector('.updatebtn');
    selectpbtn.style.display = "none";//blcok


    document.querySelector('#img1').value = info.img1;
    document.querySelector('#name').value = info.name;
    document.querySelector('#qnty').value = info.qnty;
    document.querySelector('#price').value = info.price;
}
// ========================================================================
// ========================final update================

function updateProduct(){
   
    let photo = document.querySelector('#img1').value;
    let name = document.querySelector('#name').value;
    let stock = document.querySelector('#qnty').value;
    let price = document.querySelector('#price').value;
    let obj = {//work from here
        
        "photo":photo,
        "name":name,
        "stock":stock,
        "price":price
        
    }
   
    fetch(`http://localhost:4000/product/${uid}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    
    return false;
}




        // -----------------------------------