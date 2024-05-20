import React from "react";
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
            <h1> We ensure better education for better World</h1>
            <p>Explore limitless learning possibilities at <b>EduHub</b> , where curiosity 
                meets knowledge.<br/> Join us today and embark on a transformative educational journey.</p>
            <button className="btn explore">Explore more <img src={dark_arrow} alt=""/></button>
            </div>
            
        </div>
    )
}

export default Hero