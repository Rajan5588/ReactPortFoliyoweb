import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CardItem = ({move1,move2,move3}) => {
  
  
 const body=document.querySelector("body");
 
const container = useRef(null);  
const {contextSafe}=useGSAP();
  useEffect(contextSafe(()=>{
    gsap.from(container.current,{
      x:-350,
      y:150,
      duration:5,
     opacity:1,
      scrollTrigger:{
        trigger:".c1",
        scroller:body,
        start:"top 50%"
      
      }

    })
  }),[move2])
  
  useEffect(contextSafe(()=>{
    gsap.to(".c2",{
      x:-200,
      y:-280,
      stagger: 0.2831,
      duration:3,
     opacity:1,
      scrollTrigger:{
        trigger:".c2",
        scroller:body,
        start:"top 65%",
      }

    })
  }),[move3])

  
 
   useEffect( contextSafe(()=>{
    gsap.to(".c3",{
      x:-350,
      y:-280,
      stagger: 0.2831,
      duration:7,
     opacity:1,
      scrollTrigger:{
        trigger:".c3",
        scroller:body,
        start:"top 70%"
      
      }

    })
  }),[move1])
   



 
  
  return (<>

    <div className="CardSection" >
   <div className="card c1"ref={container}>
    <img src="/Images/emogi3.png" alt=""/>
   <h4>Developer</h4>
   <span>HTML5, CSS3, JavaScript, ReactJs,  Nodejs,  Express.Js,  Mongodb, java</span>
   <button className="c-button"style={{borderRadius:"13px", marginTop:"0.7rem"}}>LEARN MORE</button>
   </div>
    
   
     <div className="card c2 " >
      <img src="/Images/emogi2.png" alt=""/>
     <h4>Design</h4>
     <span>Figma, Gsap, Gsap-React, three.js, Adobe xd</span>
     <button className="c-button" style={{borderRadius:"13px", marginTop:"0.7rem"}}>LEARN MORE</button>
     </div>
      

       <div className="card c3">
        <img src="/Images/emoge1.png" alt=""/>
       <h4>UI/UX</h4>
       <span>HBootstrap, Material UI, Style Components, Nextjs, Three.js,</span>
       <button className="c-button"style={{borderRadius:"13px", marginTop:"0.7rem"}}>LEARN MORE</button>
        </div>
        </div>
        
        </>
  )
}

export default CardItem;
