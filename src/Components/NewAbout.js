import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'

export default function NewAbout({bc,ic,}) {
    return (
        <div style={{display:"flex",flexDirection:"row",padding:"5vw",justifyContent:"space-between",width:"100%",backgroundColor:"#d9a9fc",flexWrap:"wrap",height:"auto",alignItems:"center",position:"relative",overflow:"hidden"}}>
            <img src="https://moz.imgix.net/about/young-rand.jpg?auto=format&ch=Width&fit=max&q=50&w=1200&s=f0fc387750568df33d039d53ca516567" style={{maxWidth:"450px",width:"100%",height:"auto"}} />
            <div style={{maxWidth:"600px",width:"600px",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"auto"}}>
                <h1 style={{color:"#424a4f",fontWeight:"300",marginBottom:"20px"}}>Our founding</h1>
                <div style={{maxWidth:"500px"}}>Moz was founded by Rand Fishkin and Gillian Muessig in 2004. It was called SEOmoz, and started as a blog and an online community where some of the world's first SEO experts shared their research and ideas. We launched the Beginner's Guide to SEO and our first Search Ranking Factors study, and that hub of industry expertise transformed into a small consulting firm and led us to create some of our first SEO tools.</div>
            </div>
            <div style={{top:"-15px",margin:"auto",position:"absolute",width:"100%",display:"flex",justifyContent:"center"}}>
                <AiFillCaretDown style={{color:"white",fontSize:"50px",}}/>
            </div>
        </div>
    )
}
