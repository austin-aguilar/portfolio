import "./home.css";
import Austin from '../../assets/Austin_Photo2.png'
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from 'react-icons/md';
import PropTypes from "prop-types";

const Home = ( {scrollFunc, about}) => {

    
    return (
        <div className="homeContainer">
            <div className="photoContainer">
                <img className='profilePhoto' src={Austin}/>
            </div>
            <div className="homeText">         
                <p>Hi, I am <b>Austin Aguilar</b>. I am a Software Engineer currently based in Knoxville, Tennessee.</p>
            </div>
            <div className="aboutMeBtnContainer">
                <div className="Btn">
                    <a onClick={() => scrollFunc(about)}> Learn More </a>
                </div>
            </div>
            <div className="contactLinks">
                    <Link to="https://github.com/austin-aguilar">
                        <SiGithub /> 
                    </Link>
                    <Link to="https://www.linkedin.com/in/austinaguilarmecs/">
                        <FaLinkedin /> 
                    </Link>
                    <Link to="mailto:austin47a@gmail.com">
                        <MdEmail/> 
                    </Link>
            </div>
        </div>
    )
}



Home.propTypes = {
    scrollFunc: PropTypes.func.isRequired,
    about: PropTypes.any.isRequired, // or be more specific if you know the type
};

export default Home;