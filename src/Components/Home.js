import React from 'react'
import Box from './Box'

export default function Home() {
    return (
        <div id="home" style={{maxWidth:'100%',background:"",backgroundPosition:'center',backgroundPositionY:'bottom'}}>
            
            <div style={{fontSize:'30px',fontWeight:'600',color:'color',display:'flex',flexDirection:'column'}}>
               <div style={{width:'90%',margin:'auto'}}>What we Provide?</div>
                 <div style={{border:'orange solid 2px',width:'90%',margin:'auto'}}></div>
                 <div style={{width:'90%',margin:'auto',marginTop:'20px',display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
                     <Box head="Cloud Solution" text="Our cloud strategy focuses on core competencies and business goals, Improved scalability of business applications" icon="cloud"/>
                     <Box head="Cloud Solution" text="Our cloud strategy focuses on core competencies and business goals, Improved scalability of business applications" icon="cloud"/>
                     <Box head="Cloud Solution" text="Our cloud strategy focuses on core competencies and business goals, Improved scalability of business applications" icon="cloud"/>
                     <Box head="Cloud Solution" text="Our cloud strategy focuses on core competencies and business goals, Improved scalability of business applications" icon="cloud"/>
                 </div>
            </div>
           
        </div>
    )
}
