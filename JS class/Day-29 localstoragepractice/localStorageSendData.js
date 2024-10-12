// data is alway present in json form in database for brwoser 
// data is always present in string formate 

let num =90;
let obj = {
    "name":"ramesh",
    "age":34
};

     console.log("given obj is ", obj);


let converedobj = JSON.stringify(obj);
window.localStorage.setItem('val',num);
window.localStorage.setItem('userinfo',converedobj)




let arrofobj = [
    {
        "name":"ratu",
        "age":38
    },
    {
        "name":"ratu",
        "age":38
    }

];
let convertedarrofobj = JSON.stringify(arrofobj);
window.localStorage.setItem('userdata',convertedarrofobj);


// ================ retrive value from local storage ==================


let  fetcheddata=  window.localStorage.getItem('userinfo');
let convert_feteched_data = JSON.parse(fetcheddata);
console.log(convert_feteched_data);


