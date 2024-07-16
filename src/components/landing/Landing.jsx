import React, { useRef } from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import contact from '../contact/Contact';


const Landing = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
          window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: 'smooth',
          });
        }
      };


    return(
        <div>
            <Navbar scrollFunc={scrollToSection} home={homeRef} about={aboutRef} projects={projectRef} contactMe={contactRef} />
            
            <div ref={homeRef}>
                <Home scrollFunc={scrollToSection} about={aboutRef} />
            </div>
            <div ref={aboutRef}>
                <About />
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