let count = 0;
storeStr = " ";
let str = " We are Developers";
const tpw = () => {
  setInterval(run, 100);
};
const run = () => {
  let s = document.querySelector("#output");
  storeStr = storeStr + str[count];

  s.innerHTML = storeStr;
  count = count + 1;
//   if(count>str.length-1){
//     count=0;
//   }
 if(count>str.length-1)
 {    count = 0;
    storeStr= ""

  }
};
