import React from 'react'

export default function RoundButton({text,Icon,...otherStyles}) {
    return (
        <div style={{display:"flex",borderRadius:`${parseInt(otherStyles.width)/2}px`,padding:"10px",alignItems:"center",justifyContent:"center",color:"white",textTransform:"uppercase",letterSpacing:"5px",...otherStyles}}>
            {text}
        </div>
    )
}
