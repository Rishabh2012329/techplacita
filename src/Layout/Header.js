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
        
        <div className="carousel-inner" >
            <div className="carousel-item active" style={{top:'auto',position:'relative',transition:'ease 0.25s'}}>
                <img  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item"  style={{top:'auto',position:'relative',transition:' ease 0.25s'}}>
                <img  src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" style={{top:'auto',position:'relative',transition:'ease 0.25s'}}>
                <img  src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>
        
        <div style={{textAlign:'center',top:'0px',position:'absolute',zIndex:'1',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',color:'white',fontWeight:'800',fontSize:'18px',backgroundColor:'rgba(0,0,0,0.6'}}>
             <div id="med" style={{fontWeight:'400',width:'600px'}}> TechPlacita Pvt. Ltd. is a global leader in technology services, staffing and consulting. TechPlacita is operating from digital oasis headquartered at Bikaner, India and recognized for delivery of green and sustainable IT products.
Growing at an exponential rate by utilizing tech expertise as catalyst and continuous focus on agile delivery. TechPlacita provides a variety of services including Enterprise Applications, Mobility, Big Data/BI, Staffing Services, and Cloud Solutions.
TechPlacita specializes in building state of art mobile and web-based applications. We take pride in on time delivery of robust, secure, scalable, cost effective next generation applications & platforms.</div>
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
</div>
    )
}
