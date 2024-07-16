import { useRef } from 'react';
import "./navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = ({ scrollFunc, home, about, projects, contactMe}) => {
    const navRef = useRef();

    const showNavBar = (ref) => {
        if (!ref) {
            navRef.current.classList.toggle("responsive_nav");
        }else{
            navRef.current.classList.toggle("responsive_nav");
            scrollFunc(ref)
        }
    }
    
    
    return (
        <header className="navbar">
                <a href="/">
                    <h3 >Austin Aguilar</h3>
                </a>       
            <nav ref={navRef}>
                <a onClick={() => showNavBar(home)}>Home</a>
                <a onClick={() => showNavBar(about)}>About Me</a>
                <a onClick={() => showNavBar(projects)}>Projects</a>
                <a onClick={() => showNavBar(contactMe)}>Contact</a>
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