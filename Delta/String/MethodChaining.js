//Method chaining :-
//isme apn methods ki chain banate hai ek ke bad ek method 

let msg = "            hello";

// let newmsg = msg.trim();
// console.log("aftter trim ",newmsg);

// newmsg = newmsg.toUpperCase();
// console.log("after uppercase : ", newmsg )


let newmsg = msg.trim().toUpperCase();
console.log(newmsg)
//method chaining ledt se right apply hoti hai...pahele trim() hoga then toUpperCase() apply hoga.