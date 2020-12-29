import React from 'react'
import './grid.css'


export default function Hc3() {
    return (<div>
        <div style={{display:"flex",alignItems:"center",flexDirection:"column",padding:"20px"}}>
            <div className="grid" style={{width:"90%"}}>
                <div id="gridItem1" style={{width:"100%",height:"36vw",backgroundImage:"url(https://www.intelliswift.com/images/covid-images/Support-Image-02.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div>
                <div className="grid-item-2" style={{justifyContent:"space-between",display:"flex",flexDirection:"column"}}>
                    <div id="gridItem1" style={{width:"100%",height:"17.5vw",backgroundImage:"url(https://www.intelliswift.com/images/covid-images/Support-Image-01-new.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",marginBottom:"5px"}}></div>
                    <div id="gridItem1" style={{width:"100%",height:"17.5vw",backgroundImage:"url(https://www.intelliswift.com/images/covid-images/Support-Image-04.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div>
                </div>
                <div className="grid-item-2" style={{justifyContent:"space-between",display:"flex",flexDirection:"column"}}>
                    <div id="gridItem1" style={{width:"100%",height:"17.5vw",backgroundImage:"url(https://www.intelliswift.com/images/covid-images/Support-Image-03.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",marginBottom:"5px"}}></div>
                    <div id="gridItem1" style={{width:"100%",height:"17.5vw",backgroundImage:"url(https://www.intelliswift.com/images/covid-images/Support-Image-05.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div>
                </div>          
            </div>
            <div id="fg" style={{display:"flex",flexDirection:"row",width:"90%",marginTop:"5px",justifyContent:"space-between"}}>
                <div style={{maxWidth:"800px",fontSize:"14px"}}>
                    <div style={{fontSize:"25px",fontWeight:"bold",marginBottom:"10px"}}>Together We Are Resilient</div>
                Intelliswift set an exemplary model of communal service by providing care for the Santa Clara Medical Center, Kaiser in Fremont’s ER department and other Bay Area Hospitals during the COVID 19 pandemic. Some of the departments that were hit the hardest in the Bay Area were the Respiratory and ER departments. Providing the food packets and care kits to the hospitals and the underprivileged communities was a small effort by Intelliswift to create a path to follow and uplift the brave deed of #healthcareheroes.<br/><br></br>
                <button style={{border:"none",backgroundColor:"purple",color:"white",width:"100px",padding:"5px"}}>READ MORE</button>
                </div>
                
                <div id="gridItem1" style={{width:"20vw",height:"17.5vw",backgroundImage:"url(https://www.intelliswift.com/images/covid-images/Support-Image-07.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}></div>
            </div>
           
        </div>
       
        </div>
    )
}

