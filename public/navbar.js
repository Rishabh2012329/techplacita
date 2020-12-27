

addEventListener('scroll',()=>{
  alert("hii")
    const nav=document.getElementsByTagName('nav')
    var currentScrollPos = window.pageYOffset;
    if(nav[0].offsetTop==currentScrollPos){
      alert('hi')
    }
    
})
  addEventListener('load',()=>{
    alert("hiii")
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
  