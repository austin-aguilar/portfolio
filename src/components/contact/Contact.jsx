import "./contact.css";
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { Link } from "react-router-dom";

const contact = () => {
    return (
        <div className='contactContainer'>
            <div className="contactInfo">
                <h2>Get in touch!</h2>     
            </div>
            <div className="contactLinks">
                <Link to="https://github.com/austin-aguilar">
                    <SiGithub size="32px" /> 
                </Link>
                <Link to="https://www.linkedin.com/in/austinaguilarmecs/">
                    <SiLinkedin  size="32px"/> 
                </Link>
                <Link to="mailto:austin47a@gmail.com">
                    <MdEmail  size="32px"/> 
                </Link>
            </div>
        </div>
    )
}

export default contact;