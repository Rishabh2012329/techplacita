import React from 'react'
import SidebarItem from './SidebarItem'
import {FaHome,FaTools,FaPhone,FaUser} from 'react-icons/fa'

export default function Sidebar({set}) {
    return (
        <div style={{zIndex:'8',color:'#404040',boxShadow:'1px 1px 10px black',backgroundColor:"white",animation:"ease-in 1s",animationName:"moc",animationDirection:"normal",animationDuration:'0.2s',width:'200px',display:"flex",flexDirection:"column",left:"0",top:"0",bottom:'0',position:"fixed",alignItems:'center'}}>
            <div style={{width:"100%",padding:"5px",fontSize:"20px",fontWeight:"600",paddingLeft:"15px",marginBottom:"10px"}}>Techplacita</div>
            <SidebarItem Icon={FaHome} text="Home" url="/techplacita" set={set}/>
            <SidebarItem Icon={FaTools} text="Services" url="/techplacita/Services" set={set} />
            <SidebarItem Icon={FaPhone} text="Contact us" url="/techplacita/Contact" set={set}/>
            <SidebarItem Icon={FaUser} text="About us" url="/techplacita/aboutus" set={set} />
        </div>
    )
}
