import React from 'react'
import SmallIcon from './SmallIcon'
import {FaFacebookF, FaInstagram, FaLinkedinIn,FaTwitter, FaYoutube} from 'react-icons/fa'
import Rowc from './Rowc'

export default function Footer2() {
    return (
        <div style={{width:"100%",height:"450px",padding:"3vw",paddingLeft:"5vw",paddingRight:"5vw",display:"flex",flexDirection:"column"}}>
            <p style={{fontSize:"13px"}}>All trademarks, service marks, trade names and logos appearing on the site are the property of the respective owners.</p>
     
            <div style={{marginTop:"10px",width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
                <div style={{fontSize:"12px",marginRight:"10px"}}>Stay Connected</div>
                <SmallIcon Icon={FaFacebookF} color="#cbcbcb" size="25px" width="45px" height="45px" />
                <SmallIcon Icon={FaTwitter} color="#cbcbcb" size="25px" width="45px" height="45px" />
                <SmallIcon Icon={FaYoutube} color="#cbcbcb" size="25px" width="45px" height="45px" />
                <SmallIcon Icon={FaInstagram} color="#cbcbcb" size="25px" width="45px" height="45px" />

            </div>
            <div style={{marginTop:"5vw"}}>
               <Rowc arr={['Home','Contactus','services','aboutus','career']} width="380px" weight="bold" />
            </div>
            <hr style={{width:"98%",height:"1px",color:"#404040"}}/>
            <div>
            <Rowc show={true} text="© 1999–2020" t1="Privacy" t2="Lega" arr={['Home','Contactus','services','aboutus','career']} width="400px" />
            </div>
            <p style={{fontSize:"12px",marginTop:"2vw",marginLeft:"15px"}}>PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653). Users are advised to read the terms and conditions carefully.</p>
      
            <p style={{fontSize:"12px",marginTop:"1vw",marginLeft:"15px"}}>When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for advertising purposes. Learn more here.</p>
        </div>
    )
}
