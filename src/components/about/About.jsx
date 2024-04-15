import { SiPython, SiReact, SiJavascript, SiMongodb, SiPostgresql, SiExpress, SiNodedotjs } from 'react-icons/si';
import "./about.css";
import MyIcon from "./MyIcon"

const About = () => {
    
    
    
    return (
        <div className="aboutContainer">
            
            <div className="aboutBio">
                <h1 className="AboutMe"> About Me</h1>
                <p>
                    Hello! My name is Austin Aguilar. I graduated with a BS in Mechanical Engineering in December 2023. Since the third year of my undergrad studies I have had a growing passion in joining the tech field.
                    Fueled by this passion, I have since made an effort to bridge the gap by completing a minor in Computer Science and completing multiple technical internships. I am planning to enroll into graduate school where I can earn a
                    Computer Science degree part-time. In my current role as a Software Engineering Intern, I have grown my interest in data and machine learning. In this role I am gaining valuable experience with large language models, natural language processing,
                    and a variety of software development technologies.
                </p>
            </div>
            <div className="favTechnologies">
                <h2>Favorite Technologies</h2>
                <div className="favTechnologiesIcons">
                    <MyIcon icon={<SiPython/>} caption="Python"/>
                    <MyIcon icon={<SiReact/>}  caption="React"/>
                    <MyIcon icon={<SiJavascript/>} caption="Javascript"/>
                    <MyIcon icon={<SiNodedotjs/>} caption="NodeJs"/>
                    <MyIcon icon={<SiMongodb/>} caption="MongoDb"/>
                    <MyIcon icon={<SiPostgresql/>} caption="PostgreSql"/>
                    <MyIcon icon={<SiExpress/>} caption="ExpressJs"/>
                </div>
     



            </div>
        </div>
    )
}

export default About;


