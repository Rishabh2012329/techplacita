import React from 'react'
import {Slide ,Fade} from 'react-reveal'

export default function RoundButton({text,Icon,is,id,...otherStyles}) {
    return (
        <Fade>
        <Slide left>
        <div id={id||""} style={{display:"flex",flexDirection:"column",borderRadius:`${parseInt(otherStyles.width)/2}px`,padding:"10px",alignItems:"center",justifyContent:"center",color:"white",textTransform:"uppercase",letterSpacing:"5px",cursor:"pointer",...otherStyles}}>
        
            {Icon?<div style={{marginBottom:"15px"}}>
                    <Icon fontSize={is}/>
                </div>:null}

            {text}
       
        </div>
        </Slide >
        </Fade>
    )
}
