import { useRef } from 'react';
import "./navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    
    
    return (
        <header>
            <h3>Austin Aguilar</h3>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
                <a href="/contact">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navbar