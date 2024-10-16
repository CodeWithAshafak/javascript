console.log("fgf");

function submit() {
  let name = document.querySelector("#name").value;
  let m1 = parseInt(document.querySelector("#maths").value);
  console.log("fgf");

  let m2 = parseInt(document.querySelector("#physics").value);
  let m3 = parseInt(document.querySelector("#chemistry").value);
  let m4 = parseInt(document.querySelector("#english").value);
  let m5 = parseInt(document.querySelector("#marathi").value);

  console.log(m1);

  let t = (m1 + m2 + m3 + m4 + m5) / 5;
  console.log(t);
  let output = document.querySelector(".display");
  if (t > 80 && t <= 100) {
    output.innerHTML = "your grade is A and percentage  is " + t + "%";
  } else if (t < 80 && t >= 60) {
    output.innerHTML = " your grade is B and percentage is " + t + "%";
  } else if (t < 60 && t >= 45) {
    output.innerHTML = " your grade is C and percentage  is " + t + "%";
  } else if (t < 45 && t >= 35) {
    output.innerHTML = " your grade is D and percentage is " + t + "%";
  } else if (t < 35) {
    output.innerHTML = "Fail";
  } else {
    output.innerHTML = "please enter proper marks";
  }
}
