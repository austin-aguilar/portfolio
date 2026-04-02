
import "./about.css";
import Technologies from "./Technologies";

const About = () => {
    
    
    
    return (
            
        <div className="container">
            <h1>About Me</h1>
            <p className="aboutBio">
                Hello! My name is Austin Aguilar. I am a Software Engineer at Oak Ridge National Laboratory and an MSCS candidate at Georgia Tech specializing in AI and LLM applications, bridging the gap between research and scalable production-ready applications. I am motivated to build AI-driven systems that are accessible and have real world impact.
            </p>
            <Technologies/>
        </div>
   
    )
}

export default About;


