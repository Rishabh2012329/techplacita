import React, { useState } from 'react';

export default function NavBar() {
    const [Toggle,setTog]=useState('none');
    function NavT(){
        if(Toggle==="none"){
            setTog('block')
        }
        else
         setTog("none")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light sticky " style={{zIndex:'2',backgroundColor:'transparent'}} >
                
                <div >
                    <a id="tech" className="navbar-brand" href="#" style={{fontWeight:'800',color:"white"}}>TechPlacita</a>

                    <button style={{right:"10px",position:'absolute',border:"none",outline:'none'}} className="navbar-toggler" type="button" onClick={()=>NavT()}>
                        <span className="navbar-toggler-icon"></span>
                   </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup"  >
                    <div className="navbar-nav">
                        <a id="nav" className="nav-item nav-link active" href="#" style={{color:'white'}}>Home <span className="sr-only">(current)</span></a>
                        <a id="nav" className="nav-item nav-link" style={{color:'white'}} href="#">Servics</a>
                        <a id="nav" className="nav-item nav-link" style={{color:'white'}} href="#">Carrer</a> 
                        <a id="nav" className="nav-item nav-link" style={{color:'white'}} href="#">ContactUs</a> 
                        <a id="nav" className="nav-item nav-link" style={{color:'white'}} href="#">AboutUs</a> 
                    </div>
                    
                </div>
                
               
            </nav>
            <div style={{display:Toggle,}}>
            <div style={{zIndex:'2',color:'white',boxShadow:'1px 1px 10px black',backgroundColor:"#343a40",animation:"ease-in 1s",animationName:"moc",animationDirection:"normal",animationDuration:'0.2s',width:'70%',display:"flex",flexDirection:"column",left:"0",top:"0",bottom:'0',position:"fixed",alignItems:'center'}}>
                        <div className="navi" style={{marginTop:'15px'}}>Home <div style={{width:'100%',border:"solid white 0.1px",marginTop:'15px'}}></div></div>
                        <div className="navi">Services <div style={{width:'100%',border:"solid white 1px",marginTop:'15px'}}></div></div>
                        <div className="navi">Carrer <div style={{width:'100%',border:"solid white 1px",marginTop:'15px'}}></div></div>
                        <div className="navi">AboutUs <div style={{width:'100%',border:"solid white 1px",marginTop:'15px'}}></div></div>
                    
                </div>
                </div>
        </div>
    )
}
