import React from 'react'
import {Card} from 'react-bootstrap'
import {FaCloud} from 'react-icons/fa'

export default function NewCard() {
    return (
        <div>
             <Card style={{position:"relative",background:"transparent",height:"350px",borderRadius:"8px"}} id="boot">
              
              <Card.Img id="biit" style={{height:"10px",backgroundColor:"purple",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}}   
              variant="top" />
              
              <Card.Body style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
             <FaCloud color="grey" fontSize="80px" />
             <h3 style={{fontWeight:"bold",fontSize:"40px"}}>Clouds</h3>
              <Card.Text style={{width:"85%",textAlign:"center"}}>
              Koios is a multi-tenant and cloud-deployable platform that is a highly smart, self-sufficient, and AI-powered tool that is always-agile and always-on.
                  </Card.Text>
              </Card.Body>
              <div style={{top:"0",bottom:"0",right:"0",left:"0",position:"absolute",backgroundColor:"rgba(255,255,255,0.2)",}}></div>
          </Card>
        </div>
    )
}
