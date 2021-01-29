import React,{useEffect,useState} from 'react'
import Header from '../Layout/Header'
import HB from './HB'
import Persons from './Persons'

let mn=["heading1","heading2","heading3"]
let obj={
    "0":<Persons txt={mn[0]} />,
    "1":<Persons txt={mn[1]} />,
    "2":<Persons txt={mn[2]} />
}

export default function Home2() {
    const [cng,setcng]=useState(0)
    const [color,setcolor]=useState({
        '0':"blue"
    })
    useEffect(()=>{
        const int=setInterval(()=>{
            setcng((cng+1)%3)
            setcolor({
                [(cng+1)%3]:"blue"
            })
        },2000)
        return(function(){
            clearInterval(int)
        })
    })
    return (
        <div>
            <Header/>
            <div style={{width:"100%",padding:"65px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                <HB/>
                <HB/>
                <HB/>
                <HB/>
            </div>

            <div style={{width:"100%",backgroundColor:"purple",display:"flex",justifyContent:"center",alignItems:"center",padding:"8vw",flexDirection:"column"}}>
                    {obj[cng]}
                    <div style={{display:"flex",flexDirection:"row",marginTop:"20px"}}>
                        <div onClick={()=>{setcng(0)
                            setcolor({'0':"blue"})
                        }} style={{width:"12px",height:"12px",backgroundColor:color['0']||"grey",borderRadius:"100px"}}></div>
                        <div onClick={()=>{setcng(1)
                            setcolor({'1':"blue"})
                        }} style={{width:"12px",height:"12px",backgroundColor:color['1']||"grey",borderRadius:"100px",marginRight:"10px",marginLeft:"10px"}}></div>
                        <div onClick={()=>{setcng(2)
                            setcolor({'2':"blue"})
                        }} style={{width:"12px",height:"12px",backgroundColor:color['2']||"grey",borderRadius:"100px"}}></div>
                    </div>
            </div>
        </div>
    )
}
