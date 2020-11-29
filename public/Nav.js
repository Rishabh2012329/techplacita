function ad(){
addEventListener('scroll',function con(){
    const nav=document.getElementsByTagName('nav')
    var currentScrollPos = window.pageYOffset;
    nav[0].style.backgroundColor="#343a40"
    if(currentScrollPos>60){
        nav[0].style.backgroundColor="#343a40"
        nav[0].style.animationName="top"
        nav[0].style.webkitAnimationDuration="0.3s"
    }
    else{
    nav[0].style.backgroundColor="transparent"
    nav[0].style.animationName="none"
    nav[0].style.webkitAnimationDuration="none"
    }
})
}
alert("fine")

ad()