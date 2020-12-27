import React from 'react'
import '../Layout/header.css'

export default function Box({head,text,icon}) {
    return (
        <div>
            <div id='box' style={{maxWidth:'450px',height:'auto',padding:'15px',margin:'4px',display:'flex',flexDirection:"row"}}>
            <div id="ibox" style={{backgroundColor:'rgba(23,24,25,0.6)',padding:'25px',borderRadius:'60px',height:"115px"}}>
             <i id="imgbox" style={{color:'white'}} className={`fa fa-${icon} fa-2x`}></i>
            </div>
            <div style={{display:'flex',flexDirection:'column',color:'black'}}>
                <div id="textbox" style={{wordBreak:'break-word',marginLeft:"25px"}}>{head}</div>
                <div id="disbox" style={{wordBreak:'break-word',marginLeft:"25px",fontSize:'13px'}}>{text}</div>
            </div>
            </div>
        </div>
    )
}
