import React from "react";
import Typewriter from 'typewriter-effect'
import codinggif from './images/coding.gif'
import { Image } from "react-bootstrap";

const Home = () => {
    return(
    <div className='Home' initial={{ opacity: 0 }}
    animate={{ opacity: 3 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0 }}
    class="mt-36 sm:mt-40">
        
        <h1><svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="currentColor" className="bi-laptop" viewBox="0 0 16 16"> <Image src={`${codinggif}`}/>
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg></h1>
<br/>
<h1><span className='firstname'>Brandon</span>.<span className="lastname">Hernandez</span></h1>
<h3>
<Typewriter
  className="typewriter"
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Full Stack Engineer")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("PERN Developer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("MERN Developer")
  .pauseFor(1000)
  .start();
  
  }}
  
  />
  </h3>


    </div>
    )
}


export default Home