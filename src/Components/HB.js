import React from 'react'
import {FaBasketballBall} from 'react-icons/fa'

export default function HB() {
    return (
        <div style={{width:"250px",height:"220px",padding:"20px",display:"flex",flexDirection:"column",boxShadow:"0px 0px 20px rgba(0,0,0,0.1)",justifyContent:"space-around",borderRadius:"7px"}}>
            <FaBasketballBall fontSize="35px" color="purple" />
            <div style={{fontWeight:"bold"}}>Loreum Ipsem</div>
            <div>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </div>
        </div>
    )
}
