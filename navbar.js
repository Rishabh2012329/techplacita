addEventListener('scroll',()=>{
    const nav=document.getElementsByTagName('nav')
    const navbar=document.getElementsByClassName("navbar")
    console.log(navbar)
    var currentScrollPos = window.pageYOffset;
    nav[0].style.backgroundColor="#343a40"
    if(currentScrollPos>60){
        nav[0].style.backgroundColor="#343a40"
        nav[0].style.animationName="top"
        nav[0].style.webkitAnimationDuration="0.3s"
        nav[0].classList.add("sticky")
        console.log(nav)
    }
    else{
    nav[0].style.backgroundColor="transparent"
    nav[0].style.animationName="none"
    nav[0].style.webkitAnimationDuration="none"
    }
})
  addEventListener('load',()=>{
      var x= document.getElementById('st')
    console.log(x)
    x.addEventListener('animationend',()=>{
        var sty=document.getElementById('stay');
        console.log(sty)
        sty.style.display="flex";
        sty.style.animationName="op";
        sty.style.webkitAnimationDuration="1s"
})
;
  })  
  