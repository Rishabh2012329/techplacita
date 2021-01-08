import React from 'react'
import {FaFacebookF} from 'react-icons/fa'

export default function SmallIcon({width,height,Icon,size,color,func}) {
    
    return (
        <div id="smi" onClick={func?func:null} style={{width:width,height:height,borderRadius:"50px",border:"solid white 1px",justifyContent:"center",alignItems:"center",display:"flex",backgroundColor:color?color:"",marginRight:"10px"}}>
           { Icon?<Icon  color="white" fontSize={size?size:"12px"} />:null}
        </div>
    )
}
