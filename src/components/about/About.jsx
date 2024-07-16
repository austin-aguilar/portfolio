
import "./about.css";
import Experience from '../mappings/Experience'
import Education from '../mappings/Education'
import Projects from "../mappings/Projects";
import Technologies from "./Technologies";

const About = () => {
    
    
    
    return (
            
        <div className="container">
            <h1>About Me</h1>
            <p className="aboutBio">
                Hello! My name is Austin Aguilar. I graduated with a BS in Mechanical Engineering in December 2023. Since the third year of my undergrad studies I have had a growing passion in joining the tech field.
                Fueled by this passion, I have since made an effort to bridge the gap by completing a minor in Computer Science and completing multiple technical internships. I am planning to enroll into graduate school where I can earn a
                Computer Science degree part-time. In my current role as a Software Engineering Intern, I have grown my interest in data and machine learning. In this role I am gaining valuable experience with large language models, natural language processing,
                and a variety of software development technologies.
            </p>
            <Technologies />
        </div>
   
    )
}

export default About;


