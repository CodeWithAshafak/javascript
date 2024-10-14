function calculate() {
    let amount = document.querySelector("#amount").value;


    let gst = 0.18;

    let sgst = gst/2;

    let cgst = gst/2;

    let gstAmount ="gst is " + amount*gst;
    let SAmount = "state gst is "+amount*sgst;
    let CAmount = "centeral gst is "+amount*cgst;

    document.querySelector(".gst").innerHTML = gstAmount;
    document.querySelector(".cgst").innerHTML = CAmount;
    document.querySelector(".sgst").innerHTML = SAmount;
}