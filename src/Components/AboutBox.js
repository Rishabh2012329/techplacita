import React from 'react';
import './contact.css'


export default function AboutBox({text,Icon}){
	return (
		<div id="about" style={{zIndex:"-2",background:"url(https://website-assets.teamwork.com/offload/app/uploads/2016/04/13221249/5-Positive-Conflict-tips-You-Can-Learn-From-High-Performance-Teams-5.jpg)",backgroundPosition:"center",backgroundSize:"contain",marginTop:"20px",textAlign:"center",position:"relative",width:"500px",height:"auto",padding:"20px",paddingTop:"20px",paddingBottom:"60px",color:"white",borderRadius:"7px",boxShadow:"1px 5px 10px rgba(0,0,0,0.25)"}}>
			<div style={{zIndex:"-1",borderRadius:"5px",top:"0px",left:"0px",right:"0px",bottom:"0px",position:"absolute",width:"100%",backgroundColor:"rgba(0,0,0,0.3)"}}></div>
			<h1 style={{zIndex:"10",width:"100%",fontWeight:"600",textShadow:"5px 5px 5px rgba(0,0,0,0.7)"}}>Best Team</h1>
			<div style={{marginTop:"30px",textAlign:"center",width:"100%",zIndex:"1"}}>
				{text}
			</div>
			<div style={{bottom:"10px",right:"10px",position:"absolute",opacity:"0.1",fontSize:"100px"}}>
				{Icon?<Icon/>:null}
			</div>
		</div>
	)
}