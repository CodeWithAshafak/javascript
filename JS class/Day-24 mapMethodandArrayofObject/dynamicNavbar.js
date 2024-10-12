 let anchor = [
    {
        show:"Home",
        anchor:"index.html"
    },
    {
        show:"About",
        anchor:"about.html"
    },
    {
        show:"Product",
        anchor:"product.html"
    },
    {
        show:"Service",
        anchor:"service.html"
    }
 ] 
 let s = document.querySelector('.nav');
 s.innerHTML=anchor.map(a=>`
    <li><a href="${a.anchor}">${a.show}</a></li>`).join("")