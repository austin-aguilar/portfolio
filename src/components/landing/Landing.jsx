import React, { useRef } from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../mappings/Projects';
import  Experience from '../mappings/Experience';




const Landing = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (sectionRef) => {
        const navHeight = document.querySelector('.navbar').getBoundingClientRect().height;
        const desiredOffset = sectionRef.current.offsetTop - navHeight;
        if (sectionRef.current) {
          window.scrollTo({
            top: desiredOffset ,
            behavior: 'smooth',
          });
        }
      };


    return(
        <div>
            <Navbar className="navbar" scrollFunc={scrollToSection} home={homeRef} about={aboutRef} projects={projectRef} contactMe={contactRef} />
            
            <div ref={homeRef}>
                <Home scrollFunc={scrollToSection} about={aboutRef} />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div>
                <Experience />
            </div>
            <div ref={projectRef}>
                <Projects />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>

        </div>
    )

}

export default Landing;