import React from 'react'
import Box from './Box'

export default function Home() {
    return (
        <div id="home" style={{maxWidth:'100%',background:"white",backgroundPosition:'center',backgroundPositionY:'bottom',width:'90%',margin:'auto',padding:"30px"}}>
           
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",width:'100%',justifyContent:"space-around",marginTop:"40px",}}>
                <img style={{maxWidth:'350px'}} src="https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg"/>
                 <div id="med" style={{fontWeight:'400',width:'600px'}}> 
                    
                    <div style={{marginBottom:"10px",fontWeight:'600',fontSize:"23px",maxWidth:"180px",borderBottom:"solid orange 2px"}}>
                        Who are we ?
                    </div>

                 TechPlacita Pvt. Ltd. is a global leader in technology services, staffing and consulting. TechPlacita is operating from digital oasis headquartered at Bikaner, India and recognized for delivery of green and sustainable IT products.
                    Growing at an exponential rate by utilizing tech expertise as catalyst and continuous focus on agile delivery. TechPlacita provides a variety of services including Enterprise Applications, Mobility, Big Data/BI, Staffing Services, and Cloud Solutions.
                   
                    TechPlacita specializes in building state of art mobile and web-based applications. We take pride in on time delivery of robust, secure, scalable, cost effective next generation applications & platforms.</div>
            </div>

            <div style={{fontSize:'30px',marginTop:"40px",fontWeight:'600',color:'color',display:'flex',flexDirection:'column'}}>
               <div style={{width:'90%',margin:'auto'}}>What we Provide?</div>
                 <div style={{border:'orange solid 2px'}}></div>
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
