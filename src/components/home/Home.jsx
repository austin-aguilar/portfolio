import "./home.css";
import Austin from '../../assets/Austin_Photo2.png'
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from 'react-icons/md';
import PropTypes from "prop-types";

const Home = ({ scrollFunc, about }) => {


    return (
        <section className="homeSection">
            <div className="homeContent">
                <div className="homeText">
                    <span className="homeRole">Software Engineer</span>
                    <h1 className="homeName">
                        Austin <span>Aguilar</span>
                    </h1>
                    <p className="homeDesc">
                        Building AI-driven systems at Oak Ridge National Laboratory.
                        MSCS candidate at Georgia Tech, specializing in LLMs and scalable AI infrastructure.
                    </p>
                    <div className="homeActions">
                        <a className="btn" onClick={() => scrollFunc(about)}>About Me</a>
                        <div className="homeSocials">
                            <Link to="https://github.com/austin-aguilar" target="_blank" rel="noreferrer">
                                <SiGithub />
                            </Link>
                            <Link to="https://www.linkedin.com/in/austinaguilarmecs/" target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </Link>
                            <Link to="mailto:austin47a@gmail.com">
                                <MdEmail />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="homePhotoCol">
                    <div className="photoRing">
                        <img className="profilePhoto" src={Austin} alt="Austin Aguilar" />
                    </div>
                </div>
            </div>
        </section>
    )
}

Home.propTypes = {
    scrollFunc: PropTypes.func.isRequired,
    about: PropTypes.any.isRequired,
};

export default Home;