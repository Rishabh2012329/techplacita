import React from 'react'
import {FaFacebookF} from 'react-icons/fa'

export default function SmallIcon({width,height,Icon}) {
    return (
        <div style={{width:width,height:height,borderRadius:"50px",border:"solid white 1px",justifyContent:"center",alignItems:"center",display:"flex"}}>
           { Icon?<Icon color="white" fontSize="12px" />:null}
        </div>
    )
}
