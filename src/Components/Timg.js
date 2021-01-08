import React from 'react'

export default function Timg({text}) {
    return (
        <div style={{color:"white",width:"350px",height:"250px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",border:"solid white 2px",margin:"10px",marginTop:"75px"}}>
            <div style={{width:"150px",height:"150px",borderRadius:"100px",backgroundPosition:"center",backgroundSize:"cover",backgroundImage:"url(https://www.intelliswift.com/images/covid-images/ramki.png)",top:"-75px",position:'absolute'}}></div>
            <div style={{width:"90%",marginTop:"50px"}}>
                <div style={{fontWeight:"bold",fontSize:"19px"}}>Empowering Enterprises With Actionable Insights</div>
                <div style={{fontSize:"11px",marginTop:"10px"}}>By Ramki Sundararaman - VP of Data & BI</div>
                <h5 style={{color:"green",marginTop:"20px"}}>READ MORE</h5>
            </div>
        </div>
    )
}
