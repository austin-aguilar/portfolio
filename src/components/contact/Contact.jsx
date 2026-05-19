import "./contact.css";
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
// import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <section className="contactSection">
            <div className="contactInner">
                <span className="section-label">Contact</span>
                <h2 className="contactTitle">Get in Touch</h2>
                <p className="contactDesc">
                    Open to new opportunities, collaborations, and conversations.
                </p>
                <div className="contactLinks">
                    <a href="https://github.com/austin-aguilar" target="_blank" rel="noreferrer" className="contactLink">
                        <SiGithub />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/austinaguilarmecs/" target="_blank" rel="noreferrer" className="contactLink">
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>
                    <a href="mailto:austin47a@gmail.com" className="contactLink">
                        <MdEmail />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;