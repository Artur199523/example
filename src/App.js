import React,{useEffect} from "react"

import './App.css';
import Aos from "aos"
import "aos/dist/aos.css"
import ExampleAos from "./examplAos";

function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="App"  data-aos="fade" data-aos-duration = "3000">
     <div data-aos="zoom-in"  style={{width:"100%",height:"500px"}}>
       <h1>Sectiopn 1</h1>
     </div>
     <div style={{width:"100%",height:"500px"}}>
       <h1 data-aos="fade-left">Sectiopn 2</h1>
     </div>
    <ExampleAos/>
     <div style={{width:"100%",height:"500px"}}>
       <h1>Sectiopn 4</h1>
     </div>
     <div style={{width:"100%",height:"500px"}}>
       <h1 data-aos="flip-up">Sectiopn 5</h1>
     </div>
     <div style={{width:"100%",height:"500px"}}>
       <h1>Sectiopn 6</h1>
     </div>
    </div>
  );
}

export default App;
