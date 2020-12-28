import React from 'react'
import './grid.css'

export default function Hc3() {
    return (
        <div style={{display:"flex",justifyContent:"center",padding:"20px"}}>
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
        </div>
    )
}
