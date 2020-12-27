import React from 'react'
import {Form,Col} from 'react-bootstrap'
import Input from './Input'
import './contact.css'
import Footer from '../Layout/Footer'

export default function Contact(){
	return(
		<div style={{left:"0",right:"0",position:"absolute",overflow:"hidden"}}>
		<div id="cont" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",height:"100%",width:"100%",}}>
			{/*<div style={{color:"white",width:"40%",flexDirection:"column",backgroundColor:"#0359a2",padding:"30px",height:"100%"}}>
			  <div style={{height:"300px",width:"400px",display:"flex",justifyContent:"space-evenly",flexDirection:"column"}}>
				<div style={{borderBottom:"solid white 1px",width:"140px",fontSize:"20px",marginTop:"30px"}}>
					CONTACT US
				</div>
				<div style={{fontSize:"35px",fontWeight:"900",marginTop:"15px"}}>Interested in working with us?</div>
				<div style={{fontSize:"21px",marginTop:"24px"}}>We would love to hear from you</div>
				<div style={{fontSize:"17px",marginTop:"33px"}}>Please fill the form or send us an email</div>
				<div style={{fontSize:"20px",fontWeight:"600",marginTop:"24px"}}>techplacita@gmail.com</div>
			</div>
			</div>*/}
			<div id="cf" style={{display:"flex",alignItems:"center"}}>
			 <Form.Group as={Col}  style={{marginTop:"60px",heigth:"300px",width:"300px"}}>
			 <h1 style={{fontWeight:"600"}}>Drop us a line </h1>
		   <Form.Row style={{marginTop:"30px"}}>
			   <Input text="Name"/>		   
		   </Form.Row>

		   <Form.Row>
			   <Input text="Email"/>		
		   </Form.Row>

		   	<Form.Row>
				<Input text="Company"/>
		   </Form.Row>

		   <Form.Row>
				<Input text="Message"/>				
		   </Form.Row>

		    {/*<Form.Row style={{marginTop:"30px",textAlign:"left"}}>
		      <Form.Group>
				<Form.Check type="checkbox" defaultChecked="1" label="Yes, I have Read and agree to the privacy policy."/>
			  </Form.Group>
		   </Form.Row>*/}
		  
		   		<button className="btn btn-dark" style={{borderRadius:"20px",width:"100px"}} >Send</button>
		   
		 </Form.Group>


		 	{/*<button style={{float:"right",width:"100px",boxShadow:"0px 5px 14px rgba(0,0,0,0.25)",heigth:"40px",color:"white",backgroundColor:"darkorange",padding:"10px",border:"none"}}>
		 		Submit
		 	</button>*/}
			</div>
			<div style={{display:"flex",alignItems:"center"}}>
				<div style={{maxWidth:"500px",height:"300px",paddingTop:"40px"}}>
				
				<img id="cimg" style={{width:"500px",height:"300px"}} src="https://cccnevada.com/dashboard/wp-content/uploads/Contact-Us.jpg"/>
				</div>
			</div>

		</div>
		<Footer/>
		</div>
	)
}