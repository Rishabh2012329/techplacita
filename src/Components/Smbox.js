import React from 'react'

export default function Smbox(){
	return(
		<div id="smb" style={{backgroundColor:"#f5f5f5",display:'flex',flexDirection:"column",padding:"20px",marginTop:"20px"}}>
			<div style={{display:'flex',justifyContent:"space-between",height:"50px",width:'100%',alignItems:"center"}}>
				<span style={{fontSize:"20px",fontWeight:"600"}}>Microsoft</span>
				<img style={{width:"50px"}} src="https://d1max5sgcetgxr.cloudfront.net/sites/default/files/2020-04/microsoft_icon_0.png"/>
			</div>
			<p style={{marginTop:"20px",fontSize:"16px",color:"#777"}}>SharePoint, Power Apps, and Power BI consulting, implementation and support services for enhanced collaboration and productivity.</p>
		</div>
	);
}