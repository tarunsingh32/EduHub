import React, { useEffect, useState } from "react";
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { Link } from "react-scroll";
import menu from '../../assets/menu-icon.png'

const Navbar =()=>{
    const[sticky,setSticky] = useState(false);

   useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>590? setSticky(true): setSticky(false);
        } )
   },[]);

   const[mobileMenu , setMobileMenu] =useState(false);
   const toggleMenu =() =>{
     mobileMenu? setMobileMenu(false): setMobileMenu(true);
   }
    return(
            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <img src={Logo} alt="" className="logo"/>
                <ul className={mobileMenu?"":"hide-mobile-menu"}>
                    <li><Link to="hero" offset={0} smooth= {true} duration={500} >Home</Link></li>
                    <li><Link to="programs" offset={-220} smooth= {true} duration={500}>Program</Link></li>
                    <li><Link to="about" offset={-150} smooth= {true} duration={500}>About</Link></li>
                    <li><Link to="campus" offset={-260} smooth= {true} duration={500}>Campus</Link></li>
                    <li><Link to="testimonials" offset={-220} smooth= {true} duration={500}>Testinomials</Link></li>
                    <li><Link to="contact" offset={-260} smooth= {true} duration={500} className="btn">Contact</Link></li>

                </ul>
                <img src={menu} alt="" className="menu-icon" onClick={toggleMenu}/>
            </nav>
    )
}

export default Navbar