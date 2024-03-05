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
                <a href="/#">Home</a>
                <a href="/#">About Me</a>
                <a href="/#">Projects</a>
                <a href="/#">Resume</a>
                <a href="/#">Contact</a>
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