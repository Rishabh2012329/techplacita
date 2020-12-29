import React from 'react'
import './style.css'
import Timg from './Timg'

export default function Hc4() {
    return (
        <div style={{position:"relative"}}>
            <div style={{color:"white",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"transparent",marginTop:"20px"}}>
					<div style={{width:"40px",backgroundColor:"green",height:"4px",marginTop:"10px",marginBottom:"10px"}}></div>
					<h3 style={{fontWeight:"800"}}>CHALLENGES AND RESPONSE TO COVID 19</h3>
                    <h4>Thought Leadership Blogs</h4>	
			</div>
            <div style={{display:"flex",flexWrap:"wrap",width:"100%",padding:"40px",justifyContent:"space-around"}}>
                <Timg/>
                <Timg/>
                <Timg/>
            </div>
            <div  className="parallex" style={{zIndex:"-10",backgroundImage:"url(https://www.intelliswift.com/images/covid-images/Challenges-and-Response-.jpg)"}}></div>
            
        </div>
    )
}
