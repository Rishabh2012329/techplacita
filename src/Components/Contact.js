import React,{useEffect} from 'react'
import {Form,Col,col} from 'react-bootstrap'
import Input from './Input'
import './contact.css'
import Footer2 from './Footer2'
import GMap from './GMap'


export default function Contact(){
	const scr=()=>{
		const nav=document.getElementsByTagName('nav')
		var currentScrollPos = window.pageYOffset;
		if(currentScrollPos<20){ 
			nav[0].style.background="white"
			nav[0].style.color="#404040"
			nav[0].style.boxShadow="0px 5px 10px rgba(0,0,0,0.2)"
			
		  }
		}
	useEffect(()=>{
		var nav=document.getElementsByTagName('nav');
		nav[0].style.backgroundColor="white"
		nav[0].style.color="#404040"
		nav[0].style.boxShadow="0px 5px 10px rgba(0,0,0,0.2)"
		 window.addEventListener('scroll',scr)
		return function cleanup () {
			nav[0].style.backgroundColor="transparent"
			nav[0].style.color="white"
			nav[0].style.boxShadow=""
			window.removeEventListener('scroll',scr);
		  }
	},[])
	return(
		<div style={{overflow:"hidden",width:"100%",display:"flex",alignItems:"center",flexDirection:"column"}}>
			<div style={{zIndex:"-2",width:"100%",height:"300px",background:"url(https://www.ascendas-reit.com/en/-/media/eeb9c6f489b849039f4074c3642ed745.jpg) no-repeat center ",backgroundSize:"cover",paddingTop:"90px",position:"relative"}}>
					<div style={{zIndex:"-1",top:"0",bottom:'0',left:'0',right:'0',position:"absolute",backgroundColor:"rgba(100,47,130,0.5)",}}></div>
					<h1 style={{textAlign:"center",color:"white",zIndex:"3"}}>Contact us</h1>
			</div>
		<div id="cont" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",height:"auto",width:"90%",alignItems:"center",marginBottom:"8vw"}}>
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
			<div id="cf" style={{display:"flex",alignItems:"center",width:"300px"}}>
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

				
			 	<GMap/>

			
		</div>
			
			
		
		
		<Footer2/>
		</div>
	)
}