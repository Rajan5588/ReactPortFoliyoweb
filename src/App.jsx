
import { useEffect, useState } from 'react';
import './App.css'
import IntroBody from './BodyComponants/IntroBody';
import NavBar from './NavBar/NavBar';
import Contact from './Pages/Contact';
import Footer from './Footer/Footer';

function App() {
 let [Color , setColor]=useState('LightMode');   
 let [move1, setMove1]=useState('');
  let [move2, setMove2]=useState('');
  let [move3, setMove3]=useState('');
 const backToggle=(e)=>{
  if(Color==="LightMode"){
    setColor("darkMode")
  }else{
    setColor("LightMode");
  }
 }
 let move=(e)=>{
  console.log(e.screenY)
  if(e.screenY>100){
     setMove1(e.screenY)
    }else if(e.screenY>200){
     setMove2(e.screenY)
    }else if(e.screenY>300){
     setMove3(e.screenY)
    }
   }
     useEffect(()=>{
      document.querySelector("body").className=Color;
     },[Color])
     
  return (
    
    <div onMouseMove={move} >
      <NavBar backToggle={backToggle} Color={Color} ></NavBar>
        <IntroBody  move1={move1}  move2={move2}  move3={move3}></IntroBody>

        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default App;
