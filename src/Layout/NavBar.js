import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {FaPhone, FaTools,FaHome, FaUser} from 'react-icons/fa'
import Sidebar from './Sidebar'

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
                       
                        <Link id="ink" to="/techplacita/Contact" style={{color:"inherit"}}><a id="nav" className="nav-item nav-link" style={{color:'inherit'}} >ContactUs</a> </Link>
                        <Link id="ink" to="/techplacita/Aboutus" style={{color:"inherit"}}><a id="nav" className="nav-item nav-link" style={{color:'inherit'}} >AboutUs</a></Link>
                    </div>
                </div>     
            </nav>
            <div style={{display:Toggle}} >
                <Sidebar set={setTog} />
                <div style={{top:'0',bottom:"0",left:"0",right:"0",position:"fixed",zIndex:"7",backgroundColor:"rgba(0,0,0,0.3)"}} onClick={()=>setTog('none')}></div>
           </div>
        </div>
    )
}
