import React from 'react'

export default function Rowc({arr,width,weight,show,text,t1,t2}) {
    return (
        <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between',flexWrap:"wrap"}}>
            <div id="footmarg" style={{width:width||"300px",display:'flex',flexDirection:"row",justifyContent:"space-around"}}>
                {arr.map((name)=>{
                    return(
                        <div style={{fontSize:"13px",fontFamily:"sans-serif",color:"black",fontWeight:weight,marginLeft:weight?'5px':"0"}}>
                            {name}
                        </div>
                    )
                })}
            </div>

           {show?<div style={{fontSize:"15px",width:"400px",color:"#404040",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
               {text}
              <div>{t2}</div>
           </div>:null}
        </div>
    )
}
