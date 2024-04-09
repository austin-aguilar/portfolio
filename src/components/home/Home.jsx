import "./home.css";
// import Austin from '../../assets/Austin_Photo.jpeg'
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Link } from "react-router-dom";
import { MdEmail } from 'react-icons/md';

const Home = () => {

    
    return (
        <div className="homeContainer">
            <div className="homeText">
                <p>Hi, I am <b>Austin Aguilar</b>. I am an aspiring Software Engineer currently based in Knoxville, Tennessee.</p>
            </div>
            <div className="aboutMeBtnContainer">
                <div className="aboutMeBtn">
                    <a href="/aboutme"> Learn More </a>
                </div>
            </div>
            <div className="professionalLinks">
                    <Link to="https://github.com/austin-aguilar">
                        <SiGithub /> 
                    </Link>
                    <Link to="https://www.linkedin.com/in/austinaguilarmecs/">
                        <SiLinkedin /> 
                    </Link>
                    <Link to="mailto:austin47a@gmail.com">
                        <MdEmail/> 
                    </Link>
            </div>
        </div>
    )
}

export default Home;