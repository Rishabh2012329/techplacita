import React,{useEffect} from 'react';
import AboutBox from './AboutBox';
import {HiUserGroup} from 'react-icons/hi'
import Asb from './Asb'
import Footer from '../Layout/Footer'
import './about.css'
import NewAbout from './NewAbout'
import Footer2 from './Footer2'

export default function Aboutus(){
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
		<div>
			{/* <div style={{marginTop:"90px",marginLeft:"10px",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
				<style>{`body{background:url(https://cdn/.cnn.com/cnnnext/dam/assets/190910120101-04-shopping-cities-photos.jpg) no-repeat fixed center;background-size:auto}`}</style>
				
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
			</div> */}
			
			{/*<Footer/>*/}
			<div style={{zIndex:"-2",width:"100%",height:"300px",background:"url(https://www.ascendas-reit.com/en/-/media/eeb9c6f489b849039f4074c3642ed745.jpg) no-repeat center ",backgroundSize:"cover",paddingTop:"120px",position:"relative"}}>
					<div style={{zIndex:"-1",top:"0",bottom:'0',left:'0',right:'0',position:"absolute",backgroundColor:"rgba(100,47,130,0.7)",}}></div>
					<h1 style={{textAlign:"center",color:"white",zIndex:"3"}}>This is Techplacita</h1>
			</div>	
			<div  style={{width:"100%",marginTop:"60px",marginBottom:"60px"}}>
				<p id="moz" style={{fontWeight:"300",fontSize:"20px",maxWidth:"600px",textAlign:"center",margin:"auto",color:"grey"}}>
				At Moz, we believe there is a better way to do marketing. A more valuable, less invasive way where customers are earned rather than bought. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization (SEO). It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity: We're excited to simplify SEO for everyone through our software, education, and community.
				</p>
			</div>
			<NewAbout/>
			<Footer2/>
		</div>
	)
}