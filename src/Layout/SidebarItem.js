import React from 'react'
import {Link} from 'react-router-dom'

export default function SidebarItem({Icon,text,url,set}) {
    return (
        <Link to={url} style={{textDecoration:"none",color:"black",margin:"0",padding:"0",width:"100%"}} onClick={()=>{set("none")}}>
            <div style={{width:"100%",height:"40px",paddingLeft:"30px",display:"flex",alignItems:"center"}}>
                <Icon style={{marginRight:"10px",color:"grey"}} /> {text}
            </div>
        </Link>
    )
}
