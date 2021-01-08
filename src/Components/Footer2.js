import React from 'react'
import SmallIcon from './SmallIcon'
import {FaFacebookF, FaInstagram, FaLinkedinIn,FaTwitter, FaYoutube} from 'react-icons/fa'
import Rowc from './Rowc'
import './style.css'
export default function Footer2() {
    return (
        <div style={{width:"100%",height:"240px",padding:"3vw",paddingLeft:"5vw",paddingRight:"5vw",display:"flex",flexDirection:"column"}}>
            <p style={{fontSize:"13px"}}>All trademarks, service marks, trade names and logos appearing on the site are the property of the respective owners.</p>
     
            <div style={{marginTop:"10px",width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
                <div style={{fontSize:"12px",marginRight:"10px"}}>Stay Connected</div>
                <SmallIcon Icon={FaFacebookF} func={()=>window.open('https://www.facebook.com/techplacita')} color="#cbcbcb" size="25px" width="45px" height="45px" />
                <SmallIcon Icon={FaTwitter} color="#cbcbcb" size="25px" width="45px" height="45px" />
                <SmallIcon Icon={FaYoutube} color="#cbcbcb" size="25px" width="45px" height="45px" />
                <SmallIcon Icon={FaInstagram} color="#cbcbcb" size="25px" width="45px" height="45px" />

            </div>
            <div id="footmarg" style={{marginTop:"2vw"}}>
               
            </div>
            <hr style={{width:"98%",height:"1px",color:"#404040"}}/>
            <div id="footmarg">
            <Rowc show={true} text="© 2019–2021" t2="Copyright© All Right Reserved" arr={['Home','Contactus','services','aboutus']} width="400px" />
            </div>
            
        </div>
    )
}
