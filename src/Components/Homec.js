import React from 'react'
import Home from './Home'
import Header from '../Layout/Header'
import './style.css'
import HContainer from './HContainer'
import {FaArrowLeft, FaChevronRight,FaChevronLeft} from 'react-icons/fa'

export default function Homec(){
	return(
		<div>
		<div style={{position:"relative"}}>
			<div style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"transparent",marginTop:"20px"}}>
				<div style={{width:"60px",backgroundColor:"greenyellow",height:"3px",marginTop:"10px",marginBottom:"10px"}}></div>
				<h3 style={{fontWeight:"800"}}>INTELLISWIFT’S DIGITAL TRANSFORMATION ACCELERATORS</h3>
				<p>Intelliswift’s unique solutions are secure, scalable and modern – designed to deliver value, accelerate your digital transformation and reduce costs.</p>
			</div>
			<div style={{width:"100%",height:"auto",overflow:"hidden",padding:"5px",position:"relative",display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap",zIndex:"1"}}>
				
				<HContainer/>
				<HContainer/>
				<HContainer/>
			</div>
			<div style={{margin:"auto",marginTop:"100px",width:"85%",display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between"}}>
				<div  style={{display:'flex',flexDirection:"column",alignItems:"center"}}>
					<img src="https://www.intelliswift.com/images/covid-images/Pat.png" style={{width:"128px",height:"150px"}} />	
					<h6 style={{color:"rgba(0,0,0,0.9)",marginTop:"10px"}}>Pat Patel,CEO</h6>
				</div>
				<div id="i1" style={{display:'none',flexDirection:"column",alignItems:"center"}}>
					<img src="https://www.intelliswift.com/images/covid-images/Suraj.png" style={{width:"128px",height:"150px"}} />	
					<h6 style={{color:"rgba(0,0,0,0.9)",marginTop:"10px",fontWeight:"bold",fontFamily:"'Poppins', sans-serif"}}>SURAJ KP,<br/>PRESIDENT</h6>
				</div>
					<div  style={{display:"flex",flexDirection:"column",maxWidth:"700px"}}>
						<div style={{width:"40px",backgroundColor:"green",height:"4px",marginTop:"10px",marginBottom:"10px"}}></div>
						<h4 style={{fontWeight:"800"}}>A LETTER FROM OUR LEADEARSHIP</h4>
						<div>
						The world is battling against an unprecedented situation due to the COVID-19 pandemic and subsequent global lockdown. Our hearts go out to everyone impacted directly or indirectly by the disease and we earnestly pray for the safety and well-being of their families.<br/><br/>
Our immense gratitude is with the healthcare workers and first responders on the frontlines of this crisis. We shall remain grateful for the commitment, resilience, empathy, and compassion shown by our employees, customers, partners, and communities.<br/><br/>

We are hoping that the pandemic gets under control soon and we can all get back to business as usual. Meanwhile, stay positive with the new working norms; stay safe and take care!
						</div>
					</div>
				<div id="i2" style={{display:'flex',flexDirection:"column",alignItems:"center"}}>
					<img src="https://www.intelliswift.com/images/covid-images/Suraj.png" style={{width:"128px",height:"150px"}} />	
					<h6 style={{color:"rgba(0,0,0,0.9)",marginTop:"10px",fontWeight:"bold",fontFamily:"'Poppins', sans-serif"}}>SURAJ KP,<br/>PRESIDENT</h6>
				</div>
			</div>
			<div  className="parallex" style={{zIndex:"-10",backgroundImage:"url(https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?size=626&ext=jpg)"}}></div>
		</div >
			<div style={{position:"relative"}}>
				<div style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"transparent",marginTop:"20px"}}>
					<div style={{width:"40px",backgroundColor:"green",height:"4px",marginTop:"10px",marginBottom:"10px"}}></div>
					<h3 style={{fontWeight:"800"}}>INTELLISWIFT’S DIGITAL TRANSFORMATION ACCELERATORS</h3>	
				</div>
				<div id="slide" style={{width:"88%",height:"auto",backgroundColor:"#2b0087",margin:"auto",flexDirection:"row-reverse",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
					<div id="slideText" style={{maxWidth:"50%",height:"auto",color:"white",display:"flex",justifyContent:"center",padding:"30px",flexDirection:"column"}}>
						<h4 style={{fontWeight:"bold"}}>Soften Your Asks</h4>
						<div>We are always focused on our customers, and right now, keeping a meeting might not be their biggest priority and we respect that. Preemptively ask prospects if they need to reschedule and if so, ask for a better time slot in the next few weeks. For example: I'm sure you have a lot on your plate trying to maintain continuity of your business in this difficult time. We are all in unchartered territory and we'd be happy to share with your team what we're doing to stay up and running. Do you have some time for a call either next week or the following?</div>
						<div style={{width:"100px",display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"30px"}}>
							<div style={{border:"solid white 1px",width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}><FaChevronLeft fontSize="18px"/></div>
							<div style={{border:"solid white 1px",width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}><FaChevronRight fontSize="18px"/></div>
						</div>
					</div>	
					<img id="slideImage" src="https://www.intelliswift.com/images/covid-images/Tip-01.jpg" style={{width:"50%",height:"400px"}}/>
				</div>
				<div  className="parallex" style={{zIndex:"-10",backgroundImage:"url(https://image.shutterstock.com/image-vector/light-grey-medical-background-corona-260nw-1703862625.jpg)"}} ></div>
			</div>
		</div>
	)
}