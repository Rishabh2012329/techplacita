import React from 'react';
import AboutBox from './AboutBox';
import {HiUserGroup} from 'react-icons/hi'
import Asb from './Asb'
import Footer from '../Layout/Footer'

export default function Aboutus(){
	return(
		<div>
			<div style={{marginTop:"90px",marginLeft:"10px",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
				<style>{`body{background:url(https://cdn/.cnn.com/cnnnext/dam/assets/190910120101-04-shopping-cities-photos.jpg) no-repeat fixed center;background-size:auto}`}</style>
				{/*<div style={{backgroundColor:"rgba(0,0,0,0.5)",top:"0",left:"0",bottom:"0",right:"0",position:"absolute",zIndex:"-10"}}></div>*/}
				<AboutBox text="Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri. Mel virtute efficiantur ne, zril omnes sed no, sit eu duis semper." Icon={HiUserGroup} />
				<AboutBox text="Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri. Mel virtute efficiantur ne, zril omnes sed no, sit eu duis semper." Icon={HiUserGroup} />
				<AboutBox text="Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri. Mel virtute efficiantur ne, zril omnes sed no, sit eu duis semper." Icon={HiUserGroup} />
				<AboutBox text="Dolorem adipiscing definiebas ut nec. Dolore consectetuer eu vim, elit molestie ei has, petentium imperdiet in pri. Mel virtute efficiantur ne, zril omnes sed no, sit eu duis semper." Icon={HiUserGroup} />
			</div>
			<div style={{width:"100%",padding:"10px",backgroundColor:"#2457bd",marginTop:"20px",display:"flex",flexWrap:"wrap",paddingTop:"30px"}}>
				<div style={{width:"350px",display:'flex',alignItems:"center",flexDirection:"column"}}>
					<div style={{color:"white",fontSize:"40px",fontWeight:"600"}}>Our services</div>
					<div style={{color:"white"}}>Professional, Passionate and Proactive</div>
				</div>
				<div style={{display:'flex',flexWrap:"wrap",width:"70%"}}>
					<Asb/>
					<Asb/>
					<Asb/>
				</div>
			</div>
			<Footer/>
		</div>
	)
}