import React, { useState } from 'react';
import {Link} from 'react-router-dom'

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
            <nav className="navbar navbar-expand-lg navbar-light sticky " style={{zIndex:'5',backgroundColor:'transparent',overflow:'hidden'}} >          
                <div >
                    <a id="tech" className="navbar-brand" href="#" style={{fontWeight:'800',color:"white",fontSize:"30px"}}>TechPlacita</a>
                    <button style={{right:"10px",position:'absolute',border:"none",outline:'none',marginTop:'5px',color:'white'}} className="navbar-toggler" type="button" onClick={()=>NavT()}>
                        <span className="navbar-toggler-icon" style={{color:'white'}}></span>
                   </button>
                </div>

                <div className="collapse navbar-collapse " id="navbarNavAltMarkup" style={{marginRight:"0"}}   >
                    <div className="navbar-nav" style={{fontWeight:'600',width:'100%',display:'flex',justifyContent:"flex-end"}}>
                       <Link id="ink" to="/techplacita"> <a id="nav" className="nav-item nav-link active"  style={{color:'white'}}>Home <span className="sr-only">(current)</span></a></Link>
                        <a id="nav" className="nav-item nav-link" style={{color:'white'}} >Servics</a>
                        <a id="nav" className="nav-item nav-link" style={{color:'white'}} >Carrer</a> 
                        <Link id="ink" to="/techplacita/Contact"><a id="nav" className="nav-item nav-link" style={{color:'white'}} >ContactUs</a> </Link>
                        <Link id="ink" to="/techplacita/Aboutus"><a id="nav" className="nav-item nav-link" style={{color:'white'}} >AboutUs</a></Link>
                    </div>
                </div>     
            </nav>
            <div style={{display:Toggle}}>
            <div style={{zIndex:'8',color:'white',boxShadow:'1px 1px 10px black',backgroundColor:"#343a40",animation:"ease-in 1s",animationName:"moc",animationDirection:"normal",animationDuration:'0.2s',width:'70%',display:"flex",flexDirection:"column",left:"0",top:"0",bottom:'0',position:"fixed",alignItems:'center'}}>
                     <Link id="Link" to="/techplacita">  
			<div onClick={()=>NavT()} className="navi" style={{marginTop:'15px'}}>
				<hr style={{width:"100%",height:"1px",color:"white"}}/>Home <hr style={{width:"100%",height:"1px"}}/>
			</div>
		    </Link>

                      <Link id="Link" to="/techplacita/Contact"> 
	 		<div onClick={()=>NavT()} className="navi" style={{marginTop:"15px"}}>Contact us
			 <hr style={{width:"100%",height:"1px",color:"white"}}/>
			</div>
		    </Link>

                       <Link id="Link" to="/techplacita/Aboutus">
			 <div onClick={()=>NavT()} className="navi">About us
			  <hr style={{width:"100%",height:"1px",color:"white"}}/>
			</div>
		     </Link>        
                </div>
                </div>
        </div>
    )
}
