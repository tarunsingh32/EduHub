import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Program";
import Tittle from "./components/Tittle/Tittle";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testinomials from "./components/Testinomials/Testinomials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VedioPlayer from "./components/VedioPlayer/VedioPlayer";


 const app =()=> {
  const [playState, setPlayState ] = useState(false);

  return(
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Tittle subTittle = 'OUR PROGRAM' tittle ='What We Offer'/>
      <Program/>
      <About setPlayState ={setPlayState}/>
      <Tittle subTittle = 'GALLERY' tittle ='Campus section'/>
      <Campus/>
      <Tittle subTittle = 'TESTINOMIALS' tittle ='What Student Says'/>
      <Testinomials/>
      <Tittle subTittle = 'CONTACT US' tittle ='Get In Touch'/>
      <Contact/>
      <Footer/>
    </div>
    <VedioPlayer playState ={playState} setPlayState={setPlayState} />
    </>
  )
 }
 export default app;