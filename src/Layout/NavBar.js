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
            <nav className="navbar navbar-expand-lg navbar-light sticky" style={{zIndex:5,backgroundColor:'transparent',overflow:'hidden',color:"white",borderBottom:"solid rgba(255,255,255,0.4) 1px"}} >          
                <div >
                    <a id="tech" className="navbar-brand" href="#" style={{fontWeight:'800',color:"inherit",fontSize:"30px"}}>TechPlacita</a>
                    <button style={{right:"10px",position:'absolute',border:"none",outline:'none',marginTop:'5px'}} className="navbar-toggler" type="button" onClick={()=>NavT()}>
                        <span className="navbar-toggler-icon" style={{color:'inherit'}}></span>
                   </button>
                </div>

                <div className="collapse navbar-collapse " id="navbarNavAltMarkup" style={{marginRight:"0"}}   >
                    <div className="navbar-nav" style={{fontWeight:'600',width:'100%',display:'flex',justifyContent:"flex-end"}}>
                       <Link id="ink" to="/techplacita" style={{color:"inherit"}}> <a id="nav" className="nav-item nav-link active"  style={{color:'inherit'}}>Home <span className="sr-only">(current)</span></a></Link>
                        <Link id="ink" to="/techplacita/Services" style={{color:"inherit"}}><a id="nav" className="nav-item nav-link" style={{color:'inherit'}} >Servics</a></Link>
                        <a id="nav" className="nav-item nav-link" style={{color:'inherit'}} >Carrer</a> 
                        <Link id="ink" to="/techplacita/Contact" style={{color:"inherit"}}><a id="nav" className="nav-item nav-link" style={{color:'inherit'}} >ContactUs</a> </Link>
                        <Link id="ink" to="/techplacita/Aboutus" style={{color:"inherit"}}><a id="nav" className="nav-item nav-link" style={{color:'inherit'}} >AboutUs</a></Link>
                    </div>
                </div>     
            </nav>
            <div style={{display:Toggle}}>
            <div style={{zIndex:'8',color:'#404040',boxShadow:'1px 1px 10px black',backgroundColor:"white",animation:"ease-in 1s",animationName:"moc",animationDirection:"normal",animationDuration:'0.2s',width:'70%',display:"flex",flexDirection:"column",left:"0",top:"0",bottom:'0',position:"fixed",alignItems:'center'}}>
            <Link id="Link" to="/techplacita">  
			<div onClick={()=>NavT()} className="navi" style={{marginTop:'15px',color:"#404040"}}>
				<hr style={{width:"100%",height:"1px",color:"#404040"}}/>Home <hr style={{width:"100%",height:"1px"}}/>
			</div>
		    </Link>
            <Link id="Link" to="/techplacita/Services">  
			<div onClick={()=>NavT()} className="navi" style={{marginTop:'15px',color:"#404040"}}>
				Services <hr style={{width:"100%",height:"1px"}}/>
			</div>
		    </Link>

                      <Link id="Link" to="/techplacita/Contact"> 
	 		<div onClick={()=>NavT()} className="navi" style={{color:"#404040"}}>Contact us
			 <hr style={{width:"100%",height:"1px",color:"#404040"}}/>
			</div>
		    </Link>

                       <Link id="Link" to="/techplacita/Aboutus">
			 <div onClick={()=>NavT()} className="navi" style={{color:"#404040"}}>About us
			  <hr style={{width:"100%",height:"1px",color:"#404040"}}/>
			</div>
		     </Link>        
                </div>
                </div>
        </div>
    )
}
