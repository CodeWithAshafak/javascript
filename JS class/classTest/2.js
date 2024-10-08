function calculateTax() {
    let salary = parseFloat(document.querySelector("#salary").value);
    let tax = 0;

    if (salary < 300000) {
      document.querySelector("#result").innerText =
        "No tax needs to be paid.";
    } else if (salary >= 300000 && salary < 750000) {
      tax = (salary * 10)/100;
      document.querySelector("#result").innerText =
        "Tax to be paid: ₹" + tax;
    } else if (salary >= 750000) {
      tax = (salary * 20)/100;
      document.querySelector("#result").innerText =
        "Tax to be paid: ₹" + tax;
    }
  }