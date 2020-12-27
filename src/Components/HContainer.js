import React from 'react'
import {Card} from 'react-bootstrap'
import './style.css'

export default function HContainer() {
    return (
        <div>
            <Card style={{position:"relative",background:"transparent"}} id="boot">
              
                <Card.Img id="biit" style={{height:"200px",backgroundImage:"url(https://www.thedigitalbridges.com/wp-content/uploads/2017/04/cloud-tech-three-types-of-cloud-computing.png)",
                                 backgroundPosition:"center",
                                }}   
                variant="top" />
                
                <Card.Body style={{}}>
                <Card.Title>Cloud</Card.Title>
                <Card.Text>
                Koios is a multi-tenant and cloud-deployable platform that is a highly smart, self-sufficient, and AI-powered tool that is always-agile and always-on.
                    </Card.Text>
                </Card.Body>
                <div style={{top:"0",bottom:"0",right:"0",left:"0",position:"absolute",backgroundColor:"rgba(255,255,255,0.2)",}}></div>
            </Card>
        </div>
    )
}
