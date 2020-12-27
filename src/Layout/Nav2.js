import React from 'react'
import SmallIcon from '../Components/SmallIcon'
import {FaFacebookF, FaInstagram, FaLinkedinIn,FaTwitter, FaYoutube} from 'react-icons/fa'

export default function Nav2() {
    return (
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"35px",background:"linear-gradient(to right,purple,#2b0087)",}}>
        
        <div style={{color:"white",marginRight:"30px"}}>Contact us</div>
        
        <div style={{maxWidth:"200px",width:"200px",alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>      
            <SmallIcon width="20px" height="20px" Icon={FaFacebookF} />
            <SmallIcon width="20px" height="20px" Icon={FaInstagram} />
            <SmallIcon width="20px" height="20px" Icon={FaTwitter} />
            <SmallIcon width="20px" height="20px" Icon={FaLinkedinIn} />
            <SmallIcon width="20px" height="20px" Icon={FaYoutube} />
        </div>
    </div>
    )
}
