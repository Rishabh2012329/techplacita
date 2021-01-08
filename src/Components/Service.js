import React from 'react'
import RoundButton from './RoundButton'
import NewCard from './NewCard'
import './service.css'
import Footer2 from './Footer2'
import {FaTools,FaCloud, FaLock} from 'react-icons/fa'
import {Fade,Flip} from 'react-reveal'

export default function Service(){
	return (
		<div style={{position:"relative",overflow:"hidden"}}>
			
			
				<div style={{zIndex:"-2",width:"100%",height:"88vh",background:"url(https://www.ascendas-reit.com/en/-/media/eeb9c6f489b849039f4074c3642ed745.jpg) no-repeat center ",backgroundSize:"cover",paddingTop:"150px",position:"relative"}}>
					<div style={{zIndex:"-1",top:"0",bottom:'0',left:'0',right:'0',position:"absolute",backgroundColor:"rgba(100,47,130,0.7)",}}></div>
					<Fade>
					<h1 style={{textAlign:"center",color:"white",zIndex:"3"}}>Managed IT Services You Can Trust</h1>
					
					<p style={{textAlign:"center",color:"white",width:"300px",margin:"auto",marginTop:"3vw"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
					</Fade>
			</div>
				
			
			
			<div style={{top:"84vh",position:"absolute",display:"flex",flexWrap:"wrap",flexDirection:"row",width:"90%",justifyContent:"space-between"}}>
				<RoundButton text="getfreequot" backgroundImage="linear-gradient(to right,white ,purple)" maxWidth="700px" width="700px" height="70px" borderTopLeftRadius="0px" flexDirection="row" borderBottomLeftRadius="0" justifyContent="flex-end" marginBottom="10px"/>
				<RoundButton text="getfreequot" backgroundColor="purple" width="200px" height="70px" marginBottom="10px"/>
				<RoundButton text="getfreequot" backgroundColor="#d857ff" width="200px" height="70px" marginBottom="10px"/>
			</div>
			<div style={{alignItems:"center",justifyContent:"center",display:"flex",height:"50vh",marginTop:"11vh"}}>
				<h1 style={{textShadow:"5px 5px rgba(0,0,0,0.1)",}}>What We Do</h1>
			</div>
			<div style={{width:"85%",margin:"auto",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
				<NewCard display="none" width="" bc="red" txtColor="white" anim={false} />
				<NewCard display="none" width="" bc="purple" txtColor="white" anim={false} />
				<NewCard display="none" width="" bc="white" txtColor="grey" anim={false} />
				<NewCard display="none" width="" bc="green" txtColor="white"  anim={false}/>
				<NewCard display="none" width="" bc="blue" txtColor="white"  anim={false}/>
				<NewCard display="none" width="" bc="orange" txtColor="white"  anim={false}/>
			</div>
			<div >
			<div id="fg" style={{display:"flex",position:"relative",flexDirection:"row",width:"85%",margin:"auto",marginTop:"5px",justifyContent:"space-between",marginTop:"90px",marginBottom:"20px"}}>
                <div style={{maxWidth:"800px",maxWidth:"530px",marginTop:"20px"}}>
                    <div style={{fontSize:"45px",fontWeight:"400",marginBottom:"10px",maxWidth:"530px",marginBottom:"3.5vw"}}>Professional IT Services & Technology Consulting</div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco<br/><br></br>
					<RoundButton text="learnmore" backgroundColor="purple" width="200px" height="60px" marginBottom="10px"/>
                </div>
                
                <div id="gridItem1" style={{width:"500px",height:"400px",backgroundImage:"url(https://www.elegantthemes.com/layouts/wp-content/uploads/2018/07/img-15.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}></div>
				<h1 style={{opacity:"0.04",top:"-10px",left:"0",position:"absolute",fontSize:"70px"}}>Apporach</h1>
			</div>
           
			</div>
			<div id="rc" style={{width:"90%",backgroundColor:"blueviolet",padding:"40px",borderTopRightRadius:"400px",borderBottomRightRadius:"400px",marginTop:"12vw"}}>
			<div  style={{display:"flex",position:"relative",flexDirection:"row",margin:"auto",marginTop:"5px",justifyContent:"space-between",marginBottom:"20px",display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
                <div style={{maxWidth:"800px",width:"530px",marginTop:"20px",color:"white"}}>
                    <div id="rch" style={{fontSize:"45px",fontWeight:"600",marginBottom:"10px",maxWidth:"530px",marginBottom:"3.5vw",color:"white"}}>We Create Fully Connected Systems So You Can Focus On Your Business</div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco<br/><br></br>
					<RoundButton text="learnmore" backgroundColor="orange" width="200px" height="60px" marginBottom="10px"/>
                </div>
                
               <img id="rci" style={{maxWidth:"600px",height:"auto"}} src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/07/it-services-03.png"/>
				
			</div>
			</div>

			<div style={{display:"flex",flexDirection:"row",marginBottom:"70px",width:"80%",margin:"auto",justifyContent:"space-between",marginTop:"100px",flexWrap:"wrap"}}>
				<div style={{maxWidth:"250px",width:"250px"}}>
					<h3 style={{marginBottom:"10px",fontWeight:"400",maxWidth:"250px"}}>Five Spheres. One Mission.</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				<div style={{maxWidth:"800px",width:"900px",display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center"}}>
					<RoundButton Icon={FaTools} width="230px" height="140px" backgroundColor="rgba(5, 101, 255,0.8)" is="35px" text="Tools" marginTop="30px" id="rbb"/>
					<RoundButton Icon={FaCloud} width="230px" height="140px" backgroundColor="#404040" is="35px" text="conect" marginTop="30px" id="rbb"/>
					<RoundButton Icon={FaLock} width="230px" height="140px" backgroundColor="orange" is="35px" text="secure" marginTop="30px" id="rbb"/>
					<RoundButton Icon={FaCloud} width="320px" height="140px" backgroundColor="darkblue" is="35px" text="conect" marginTop="30px"/>
					<RoundButton Icon={FaCloud} width="320px" height="140px" backgroundColor="lightblue" is="35px" text="conect" marginTop="30px"/>
				</div>
			</div >
			<Footer2/>
		</div>
	)
}

