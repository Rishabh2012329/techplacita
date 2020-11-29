import React from 'react'
import List from './List'
import {AiOutlineFacebook,AiOutlineTwitter,AiOutlineLinkedin} from 'react-icons/ai'

export default function Footer(){
	return(
		<div className="bg-dark" style={{padding:"20px",width:"100%",display:"flex",flexDirection:"column",bottom:"0px",height:"auto",alignItems:"center"}}>
			<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginTop:"0",width:"80%"}}>
			<div style={{color:"white",width:"110px",display:"flex",flexDirection:"column",height:"100px",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center"}}>
				<div style={{fontSize:"25px",fontWeight:"600"}}>Address</div>
				<div style={{borderLeft:"solid #141414 4px",paddingLeft:"10px"}}>bikaner, ganganshahar</div>
			</div>
			<div style={{color:"white",width:"100px",display:"flex",flexDirection:"column",height:"230px",justifyContent:"space-around"}}>
				<div style={{fontSize:"25px",fontWeight:"600"}}>Pages</div>
				<div style={{borderLeft:"solid #141414 4px",paddingLeft:"10px"}}>Home</div>
				<div style={{borderLeft:"solid #141414 4px",paddingLeft:"10px"}}>Services</div>
				<div style={{borderLeft:"solid #141414 4px",paddingLeft:"10px"}}>Carrer</div>
				<div style={{borderLeft:"solid #141414 4px",paddingLeft:"10px"}}>About us</div>
				<div style={{borderLeft:"solid #141414 4px",paddingLeft:"10px"}}>Contact us</div>
			</div>
			<div style={{color:"white",width:"150px",display:"flex",flexDirection:"column",height:"120px",justifyContent:"space-around"}}>
				<div style={{fontSize:"25px",fontWeight:"600"}}>Contact us</div>
				<div style={{borderLeft:"solid #141414 4px",paddingLeft:"10px"}}>baid@gmail.com</div>
				<div style={{borderLeft:"solid #141414 4px",paddingLeft:"10px"}}>+91 1111111111</div>
			</div>
			</div>
			<hr style={{color:"white",border:"solid grey 1px",width:"80%"}}/>
			<div style={{width:"300px",display:"flex",justifyContent:"space-around",marginBottom:"40px"}}>
				<AiOutlineFacebook onClick={()=>window.open("https://www.facebook.com/techplacita")} style={{color:"white",fontSize:"34px",cursor:"pointer"}}/>
				<AiOutlineTwitter style={{color:"white",fontSize:"34px",cursor:"pointer"}}/>
				<AiOutlineLinkedin style={{color:"white",fontSize:"34px",cursor:"pointer"}}/>
			</div>
			<div style={{height:"100%",display:"flex",alignItems:"bottom",color:"white"}}>@ 2020 Techplacita</div>
		</div>
	);
}