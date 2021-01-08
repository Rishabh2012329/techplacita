import React from 'react'
import {Card} from 'react-bootstrap'
import {FaCloud} from 'react-icons/fa'
import {Zoom} from 'react-reveal'

export default function NewCard({display,bc,txtColor,anim,margin}) {
    return (
       <Zoom>
        <div>
             <Card  style={{position:"relative",background:bc?bc:"transparent",height:"350px",borderRadius:"8px",margin:"20px"}} id={!anim?"":"boot"}>
              
              <Card.Img id="biit" style={{display:display?display:"",height:"10px",backgroundColor:"purple",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}}   
              variant="top" />
              
              <Card.Body style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
             <FaCloud color={txtColor||"grey"} fontSize="80px" />
             <h3 style={{fontWeight:"bold",fontSize:"40px",color:txtColor||""}}>Clouds</h3>
              <Card.Text style={{width:"300px",textAlign:"center",color:txtColor||""}}>
              Koios is a multi-tenant and cloud-deployable platform that is a highly smart, self-sufficient, and AI-powered tool that is always-agile and always-on.
                  </Card.Text>
              </Card.Body>
              <div style={{top:"0",bottom:"0",right:"0",left:"0",position:"absolute",backgroundColor:"rgba(255,255,255,0.2)",}}></div>
          </Card>
        </div>
     </Zoom>
    )
}
