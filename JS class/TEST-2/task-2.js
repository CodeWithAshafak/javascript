function submit()
{
    let img1 = document.querySelector('.image1').value;
    let img2 = document.querySelector('.image2').value;
    let img3 = document.querySelector('.image3').value;
    let img4 = document.querySelector('.image4').value;
    let img5 = document.querySelector('.image5').value;


let card = `<section class="bclass">
<section class="f1">
    <img src="${img1}" alt="">
    <img src="${img2}" alt="">
    <img src="${img3}" alt="">
    <img src="${img4}" alt="">
</section>
<section class="f2">
    <img src="${img5}" alt="">
</section>
</section>` 

let selectshowcard = document.querySelector(".showcard");
  selectshowcard.innerHTML = card;

  
  return false;
}