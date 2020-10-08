import React, { useEffect } from 'react';
import './header.css'

export default function Header() {
    useEffect(()=>{
        document.getElementsByClassName('.carousel')
        }
    )
    return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel" style={{top:0}} >
        <ol style={{zIndex:"2"}} class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
        <div  id="st" className="carousel-inner" >
            <div className="carousel-item active" style={{top:'auto',position:'relative',transition:'ease 0.25s',zIndex:'-2'}}>
                
                <img style={{zIndex:"-2",}}  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item"  style={{top:'0',position:'absolute',transition:' ease 0.25s'}}>
                <img  src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" style={{top:'0',position:'absolute',transition:'ease 0.25s'}}>
                <img  src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>
        
        <div id="stay" style={{display:"none",fontWeight:"700",fontSize:"40px",marginLeft:'140px',color:'white',zIndex:'1',alignItems:"center",top:'0',left:'0',bottom:"0",width:'100%',position:"absolute",maxWidth:"300px"}}>Stay Safe
           <br/> Stay clean
        </div>
            
            <a id="butt" className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
        <a id="butt" className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>

        </div>
</div>
    )
}
