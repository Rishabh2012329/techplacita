import React from 'react';


export  default  function Img({img,text}){
	return(
		<div id="hov" style={{overflow:"hidden",height:"430px",maxWidth:"350px",position:"relative",marginTop:"10px"}}>
			<img  src="https://d1max5sgcetgxr.cloudfront.net/sites/default/files/2020-07/Digital-Commerce_.jpg"/>
			<div style={{bottom:"10px",position:"absolute",color:"white",width:"100%",textAlign:"center",display:"flex",flexDirection:"column"}} >
			<span style={{fontSize:"27px",fontWeight:"600"}}>Techplacita</span>
				<div id="imtext">
					Enter Your Text Here this is Place
				</div>
			</div>
		</div>
	);
}